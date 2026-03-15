### Uplode Date: <i> 15 March 2026 </i> 

# 3D Moon Eid Scene 🌙✨

An interactive 3D Eid greeting web scene built with **Three.js**. Celebrate Eid with a rotating moon, sparkling stars, and stylish “EID MUBARAK” text.

---

##  Demo Video

Watch the live demo of the scene:

<video width="600" controls>
  <source src="dd.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## ✨ Features

- **Rotating Moon:** Realistic moon texture rotates continuously.
- **Twinkling Stars:** 800+ stars randomly placed, opacity changes for twinkle effect.
- **Stylish 3D Text:** “EID MUBARAK” or custom text orbiting the moon.
- **Top Text:** Optional text above moon (currently “MH HRIDOY”).
- **Lighting:** Directional sunlight effect + ambient lighting for realistic shading.
- **Responsive Canvas:** Works on desktop and mobile.
- **Footer Branding:** Custom footer (@MH2) for identity.

---

## 🛠️ Tech Stack

- [Three.js](https://threejs.org/) – 3D rendering engine
- HTML5 & CSS3 – Layout and styling
- JavaScript – Animations & interactivity
- CDN-hosted fonts and textures

---

## 📂 File Structure

```
3d-moon-eid-scene/
├─ index.html # Main 3D scene
├─ d.mp4 # Demo video
├─ README.md # This file
└─ assets/ # Optional: textures, fonts
```


---

## 🚀 How to Run

1. Clone the repo:

```bash
git clone https://github.com/mhhridoy7907/3d-moon-eid-scene.git

```
---
# Change Top Text

Modify this line in the FontLoader section:

`
const innerGeo = new THREE.TextGeometry('MH HRIDOY', {...});
Change Eid Text
`

Modify this line:

`
const outerGeo = new THREE.TextGeometry('EID MUBARAK', {...});
`
