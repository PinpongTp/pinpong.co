---
title: Lazygit in vim
description: Lazygit terminal UI for git commands
slug: 2023-02-11_Lazygit-in-vim
category: Tips
tags: [Neovim]
img: blog-1.jpg
---

# เมื่อผมพยายามที่จะใช้คีย์บอร์ดให้มากที่สุดในการเขียนโปรแกรม Lazygit เป็น git gui client ที่ผมใช้

![Untitled](/content/img/2023-02-11_Lazygit-in-vim_img-01.png)

### เกริ่นนำ

ก่อนหน้านี้ที่ยังไม่ได้ใช้ vim ผมใช้ Sourcetree, GitKraken, GitHub Desktop และ Fork พอย้ายมาใช้ vim ก็เปลี่ยนมาใช้ git ผ่าน command line ซึ่งพอใช้ได้ และไม่ได้คิดว่าต้องหาอะไรมาใช้งานแทน จนไปเห็นคนมารีวิวเลยลองใช้งานดู ทำให้พบว่า ตอบโจทย์มาก งานและทำงานไวขึ้น

### เริ่มต้นใช้งาน

Lazygit เป็น terminal UI สำหรับ git commands คนที่ไม่ได้ใช้ vim ก็สามารถใช้งานได้ ติดตั้งผ่าน homebrew ได้เลย สำหรับผมที่ใช้ผ่าน vim ก็ตีบวกไปอีกโดยการใช้คู่กับ plugin telescope บน vim

### วิธีการติดตั้ง

ติดตั้งง่ายแสนง่ายพิมพ์คำสั่งตามคู่มือได้เลย
[kdheepak/lazygit.nvim (github.com)](https://github.com/kdheepak/lazygit.nvim)

### การใช้งาน

วิธีเต็มๆไปหาดูเอานะจะบอกแค่ที่ใช้บ่อยๆและเทคนิค

![Untitled](/content/img/2023-02-11_Lazygit-in-vim_img-02.png)

- กด `?` เพื่อเป็นหน้า help ใช้ได้กับทุด panel
- ตัว UI แบ่งออกเป็น 7 block
- ใน block Files จะแสดง list ของไฟล์ที่มีการแก้ไข
  - กด `spacebar` เพื่อ add ไฟล์เข้า stage
  - กด `c` เพื่อ commit
- ใน block Local Branches จะแสดง list ของ branches ที่อยู่บน local
  - กด `c` เพื่อ checkout branch
    - ถ้าเป็น branch ที่มีอยู่จะเก็น checkout
    - ถ้าไม่มีจะเป็นการ create new branch
  - เลือก branch โดยการกด `space` ที่ branch นั้นๆ

### สรุป

หากต้องการใช้งาน git แค่ checkout merge rebase commit lazygit ก็ถือว่าตอบโจทย์ได้ง่ายๆ แต่ถ้าต้องการดู git tree git history อาจจะต้องใช้ความพยายามพอสมควร การใช้ gui ตัวอื่นๆอาจจะง่ายกว่าสำหรับผม แต่การ commit checkout นี้เร็วมากจริงๆ ลองไปติดตั้งลองใช้งานกันดูนะครับ

---

_Pinpong_ _Tongpat_
_2023-02-11_
