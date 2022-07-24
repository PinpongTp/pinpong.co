---
title: วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git
description: วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git
slug: 2022-07-23_Rewrite-name-and-email-git-commit
img: blog-1.jpg
---

# วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git

ทำการสร้างคำสั่งก่อนเพื่อให้เรียกใช้ง่ายๆ

```
git config --global alias.change-commits '!'"f() { VAR=\$1; OLD=\$2; NEW=\$3; shift 3; git filter-branch --env-filter \"if [[ \\\"\$\`echo \$VAR\`\\\" = '\$OLD' ]]; then export \$VAR='\$NEW'; fi\" \$@; }; f"
```

แก้ไข user.name ตามนี้ได้เลย

```
git change-commits GIT_AUTHOR_NAME "old name" "new name"
```

หากจะแก้ไข้ email ก็เปลี่ยนเป็นแบบนี้

```
git change-commits GIT_AUTHOR_EMAIL "old email" "new email"
```

เพิ่มจาก ref คือเลือกเฉพาะ 10 commit ล่าสุดได้ไม่ค่อยได้ใช้หรอกแต่เผื่อต้องใช้

```
git change-commits GIT_AUTHOR_EMAIL "old@email.com" "new@email.com" HEAD~10..HEAD
```

พอจะ push ให้ push -f เพราะเราแก้ไข commit local ไปครับ

---

_Pinpong_ _Tongpat_
_2022-07-23_
