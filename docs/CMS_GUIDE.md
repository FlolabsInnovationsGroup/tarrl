# TARRL CMS Content Guide

**For Content Editors (Non-Technical)**

This guide explains how to update content on the TARRL website using Strapi CMS.

---

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Editing Research Tracks](#editing-research-tracks)
- [Editing Benefits](#editing-benefits)
- [Publishing Changes](#publishing-changes)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### Accessing the CMS

1. Open your web browser
2. Go to: **https://strapi-production-9c3d.up.railway.app/admin**
3. Log in with your credentials
   - Email: [Your admin email]
   - Password: [Your admin password]

### Dashboard Overview

After logging in, you'll see:
- **Content Manager** (left sidebar) - Edit content here
- **Content-Types** - Research Tracks and Benefits
- **Media Library** - Upload images (future use)

---

## 🤖 Editing Research Tracks

Research Tracks appear in the "Research Playground" section of the website. There are 8 tracks total.

### Steps to Edit a Research Track

1. Click **Content Manager** in left sidebar
2. Click **Research Track** under Collection Types
3. You'll see a list of 8 research tracks:
   - Humanoid Robotics
   - Quadruped Robotics
   - Assistive Robotics
   - Perception Systems
   - Swarm Robotics
   - Simulation Environments
   - Tooling & Infrastructure
   - Space Robotics

4. Click on the track you want to edit
5. You'll see these fields:

#### Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Title of the research track | "Humanoid Robotics" |
| **Short Description** | Brief description (2-3 sentences) | "Develop full-body humanoid robots capable of human-like manipulation and locomotion." |
| **Icon** | Icon name from Lucide icons | "User" |
| **Status** | Current status | "Active" or "Coming Soon" |

#### Choosing Icons

Common icon names for robotics:
- `Bot` - General robot
- `User` - Humanoid
- `Zap` - Energy/power
- `Eye` - Perception/vision
- `Users` - Swarm/multiple
- `Box` - Objects/manipulation
- `Rocket` - Space
- `Cpu` - Computing/AI
- `Network` - Connectivity
- `Tool` - Tooling

**Full icon list**: https://lucide.dev/icons

### Example Edit

**Before:**
```
Name: Humanoid Robotics
Short Description: Basic humanoid robot research
Icon: Bot
Status: Active
```

**After:**
```
Name: Advanced Humanoid Robotics
Short Description: Develop full-body humanoid robots capable of human-like manipulation, locomotion, and interaction in real-world environments.
Icon: User
Status: Active
```

---

## ✨ Editing Benefits

Benefits appear in the "What You Get" section. There are 6 benefits total.

### Steps to Edit a Benefit

1. Click **Content Manager** in left sidebar
2. Click **Benefit** under Collection Types
3. You'll see a list of 6 benefits
4. Click on the benefit you want to edit

#### Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| **Title** | Benefit headline | "Access to Real Robots" |
| **Description** | Detailed explanation | "Work with physical humanoid and quadruped robots, not just simulations." |
| **Icon** | Icon name from Lucide icons | "Bot" |

### Example Edit

**Before:**
```
Title: Robots
Description: You get robots
Icon: Box
```

**After:**
```
Title: Access to Real Robots & Simulators
Description: Work with physical humanoid and quadruped robots, realistic simulators, and digital twins. Run experiments without geographic constraints.
Icon: Bot
```

---

## 📤 Publishing Changes

**IMPORTANT**: Changes must be published to appear on the website.

### Step-by-Step Publishing

1. After editing content, scroll to top right
2. You'll see two buttons:
   - **Save** (gray) - Saves as draft only
   - **Publish** (green) - Makes live on website

3. Click **Save** first (to save your work)
4. Then click **Publish** (to make it live)

### When Changes Appear

- Changes appear on the website within **60 seconds** of publishing
- No need to refresh or restart anything
- If you don't see changes after 2 minutes, hard refresh your browser:
  - **Mac**: Cmd + Shift + R
  - **Windows**: Ctrl + Shift + R

---

## ✅ Best Practices

### Writing Content

**Research Track Descriptions**:
- Keep to 2-3 sentences
- Focus on what researchers will do, not theory
- Use active voice ("Develop systems that..." not "Systems are developed...")
- Mention specific capabilities or outcomes

**Benefit Descriptions**:
- Be specific about what's included
- Emphasize practical value
- Use concrete examples when possible

### Length Guidelines

- **Research Track Name**: 2-5 words
- **Research Track Description**: 100-150 characters
- **Benefit Title**: 3-7 words
- **Benefit Description**: 150-250 characters

### Icon Selection

- Choose icons that clearly represent the concept
- Be consistent (e.g., all robot-related tracks use robot-themed icons)
- Test icon on website to ensure it looks good

---

## 🔧 Troubleshooting

### Problem: Changes Not Appearing

**Solution**:
1. Make sure you clicked **Publish**, not just Save
2. Wait 60 seconds
3. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
4. Check if you edited the correct item

### Problem: Icon Not Showing

**Solution**:
1. Check spelling of icon name (case-sensitive)
2. Verify icon exists at https://lucide.dev/icons
3. Common typos:
   - ✅ `Bot` (correct)
   - ❌ `bot` (wrong - lowercase)
   - ❌ `Robot` (wrong - doesn't exist)

### Problem: Can't Login

**Solution**:
1. Make sure you're using the correct URL: https://strapi-production-9c3d.up.railway.app/admin
2. Check email/password (case-sensitive)
3. Contact administrator for password reset

### Problem: Text Looks Weird on Website

**Solution**:
1. Check for extra spaces before/after text
2. Avoid special characters unless necessary
3. Keep descriptions concise
4. Use proper punctuation

---

## 📋 Content Checklist

Before publishing, verify:

- [ ] All required fields are filled
- [ ] Description is clear and concise
- [ ] Icon name is spelled correctly
- [ ] No typos or grammar errors
- [ ] Status is correct (Active vs Coming Soon)
- [ ] Changes are **Published**, not just saved

---

## 🆘 Getting Help

### For Content Questions
- Review this guide
- Check existing content for examples
- Contact: [content team contact]

### For Technical Issues
- Screenshot the error
- Note what you were trying to do
- Contact: [developer contact]

### For Urgent Issues
- Changes not publishing after 5 minutes
- Can't access CMS
- Content disappeared

**Emergency Contact**: [emergency contact info]

---

## 📝 Quick Reference

### Current Content Counts
- **Research Tracks**: 8 (do not add/delete without approval)
- **Benefits**: 6 (do not add/delete without approval)

### Common Icons for Robotics

| Concept | Icon Name |
|---------|-----------|
| General Robot | `Bot` |
| Humanoid | `User` |
| Quadruped | `Dog` (if available) or `Boxes` |
| Vision/Perception | `Eye` |
| Swarm | `Users` |
| Simulation | `Monitor` |
| Tools | `Tool` or `Wrench` |
| Space | `Rocket` |
| AI/Computing | `Cpu` or `Brain` |
| Collaboration | `Users` |

### Status Options
- **Active** - Currently available for research
- **Coming Soon** - Planned for future

---

## 🎯 Content Goals

When editing, keep in mind:

1. **Professional Tone**: Scientific but accessible
2. **Action-Oriented**: Focus on what researchers will DO
3. **Specific**: Concrete examples over vague descriptions
4. **Concise**: Respect reader's time
5. **Accurate**: Only promise what we can deliver

---

**Last Updated**: December 4, 2025  
**For Questions**: Contact development team via GitHub Issues

---

**Remember**: You have the power to shape how TARRL is perceived by the global robotics community. Take pride in crafting clear, compelling content! 🤖
