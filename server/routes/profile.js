import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.userId = verified.userId;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Get user profile
router.get('/', authenticateToken, (req, res) => {
  const profileStmt = db.prepare(`
    SELECT p.*, 
           json_group_array(DISTINCT json_object(
             'id', e.id,
             'title', e.title,
             'company', e.company,
             'duration', e.duration,
             'description', e.description
           )) as experience,
           json_group_array(DISTINCT json_object(
             'id', ed.id,
             'degree', ed.degree,
             'school', ed.school,
             'year', ed.year
           )) as education
    FROM profiles p
    LEFT JOIN experience e ON e.profile_id = p.id
    LEFT JOIN education ed ON ed.profile_id = p.id
    WHERE p.user_id = ?
    GROUP BY p.id
  `);
  
  const profile = profileStmt.get(req.userId);
  
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }

  // Parse JSON strings back to arrays
  profile.experience = JSON.parse(profile.experience);
  profile.education = JSON.parse(profile.education);
  
  res.json(profile);
});

// Update profile
router.put('/', authenticateToken, (req, res) => {
  const { name, title, company, location, phone, website, linkedin, twitter, bio } = req.body;

  const stmt = db.prepare(`
    UPDATE profiles 
    SET name = ?, title = ?, company = ?, location = ?, 
        phone = ?, website = ?, linkedin = ?, twitter = ?, bio = ?
    WHERE user_id = ?
  `);

  stmt.run(name, title, company, location, phone, website, linkedin, twitter, bio, req.userId);
  res.json({ message: 'Profile updated successfully' });
});

export default router;