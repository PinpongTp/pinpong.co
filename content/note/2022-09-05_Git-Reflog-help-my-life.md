---
title: git reflog ช่วยชีวิต
description: วิธีการใช้ git reflog (การ redo git เมื่อเผลอ reset hard ไป)
slug: 2022-09-05_Git-Reflog-help-my-life
category: Tips
tags: [Git]
img: blog-1.jpg
---

# เมื่อเผลอ `git reset --hard` แล้ว commit หาย

commit ที่ยังไม่ได้ push แล้วดันเผลอทำมันหายไป `git log` ก็ช่วยไม่ได้หาไม่เจอ จริงๆแล้วมันไม่ได้หายไปไหนมันยังอยู่แค่เรามองไม่เห็น วิธีง่ายๆ ลองใช้คำสั่งนี้ดู

```
git reflog
```

ทีนี้ก็จะเห็น commit ที่เราหาไม่เจอและใจหายไปแป็บนึง วิธีการดึงกลับมาก็ง่ายๆ

```
git reset --hard HEAD@{1}
```

เท่านี้เราก็จะได้ commit ที่เผลอลบหายไปกลับคืนมา

_ref: https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog_

---

_Pinpong_ _Tongpat_
_2022-09-05_
