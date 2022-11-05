---
title: Plugin ที่ใช้คู่กับ tmux และ neovim
description: Plugin ที่ใช้คู่กับ tmux และ neovim (vim-tmux-navigator)
slug: 2022-11-05_Vim-Tmux-navigator
category: Tips
tags: Neovim
img: blog-1.jpg
---

# Plugin ที่ใช้คู่กับ tmux และ neovim

Plugin ตัวล่าสุดที่ใช้ เจอมาจาก youtube ของ **Josean Martinez** ครับ

โดยปกติแล้วเมื่อใช้ vim แล้วทำการ split จอ ผมจะใช้ s + ( h, j, k, l ) เพื่อ switch จอ

```
-- Split window and Select/Switch window
map('n', 'ss', ':split<CR><C-w>w', { noremap = false })
map('n', 'sv', ':vsplit<CR><C-w>w', { noremap = false })
map('n', 's-', ':split<CR><C-w>w', { noremap = false })
map('n', 's|', ':vsplit<CR><C-w>w', { noremap = false })
map('n', 'sh', '<C-w>h', { noremap = false })
map('n', 'sj', '<C-w>j', { noremap = false })
map('n', 'sk', '<C-w>k', { noremap = false })
map('n', 'sl', '<C-w>l', { noremap = false })

map('n', '<Leader>w', '<C-w>w', { noremap = false })
```

ส่วน tmux ผมใช้ Ctrl + a + o อย่างเดียว

Plugin ใหม่ที่เจอนั้นคือ christoomey/vim-tmux-navigator ใช้เพียง ctrl + ( h, j, k, l )

โดยสามารถใช้ได้ทั้งตัว tmux และภายใน vim ด้วยแบบพร้อมกัน

วิธีการติดตั้ง

tmux

```
set -g @plugin 'christoomey/vim-tmux-navigator'
```

neovim (lua)

```
use 'christoomey/vim-tmux-navigator'
```

ลองเอาไปติดตั้งเล่นดูว่าเหมาะไหม ผมว่าเป็นตัวนึงที่ทำให้การ control windows ง่ายขึ้นมากๆเลยครับ

\_ref: https://www.youtube.com/watch?v=U-omALWIBos

---

_Pinpong_ _Tongpat_
_2022-11-05_
