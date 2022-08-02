---
title: ทำ blog ด้วย nuxtjs markdown content
description: ย้ายบ้านมา nuxtjs ตัวเดียวอันเดียว
slug: 2022-07-23_Move-to-nuxt-js-markdown
category: Tips
img: blog-1.jpg
---

# การทำ blog ด้วย markdown

### ผมเปลี่ยนมาใช้ markdown แล้วครับ

เริ่มแรกเดิมทีเว็บไซต์นี้ใช้ react + nestjs + postgresDB และเปลี่ยนเป็น react + go + firebase firestore แต่ตอนนี้เปลี่ยนมาเป็น vuejs + markdown แล้วครับ No api จัดการที่ vuejs ที่เดียว

เจ้า nestjs มันก็เร็วอยู่หรอก แต่อยากจะลองใช้ go พอทำเสร็จแล้ว เอ๋?? จะเอาโปรเจคไปขึ้นที่ไหนนะ ก่อนหน้านี้ใช้ของฟรีบน firebase hosting แต่เจ้า go มันขึ้นไม่ได้ เลยต้องไปขึ้นไว้ที่ herogu แต่มันโคตรจะช้าเลย สุดท้ายจบที่ markdown + nuxtjs(vuejs) จะง่ายดายขนาดไหนไปดู

### เนื้อหา

1. nuxtjs markdown content
2. markdown file
3. react get file
4. go live

### เริ่ม

#### 1. nuxtjs markdown content

ก่อนอื่นติดตั้ง nuxtjs จะ yarn npm npx ตามถนัด

```
yarn create nuxt-app <project-name>
```

เลือกตามความต้องการ ที่จำเป็นต้องเลือกคือ

```
Rendering mode: Universal (SSR / Static)
```

ลอง `yarn dev` ดูว่าใช้งานได้ไหม

---

_Pinpong_ _Tongpat_
_2022-07-23_
