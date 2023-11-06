# Frontend Repository - Capstone Alterra Academy

## Bagaimana cara kontribusi pada repository?

## Branching

- Jika kamu bermaksud untuk meng-_improve_ atau memperbaharui
  > `git checkout -b "improvement/apa-yang-di-improve"`
- Jika kamu bermaksud untuk membuat sebuah _feature_
  > `git checkout -b "feature/nama-feature"`
- Jika kamu bermaksud untuk fix sebuah bug
  > `git checkout -b "bugfix/apa-yang-kamu-fix"`

## Cara mengatasi Konflik

### Cara pertama

1. Stash terlebih dahulu pekerjaan kamu supaya tidak hilang
   > `git stash`
2. Lalu pull perubahan kamu perlu pull perubahan dari branch 'development'
   > `git pull origin development`
3. Setelah kamu berhasil melakukan pembaruan dari branch `development` selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter-_stash_
   > `git stash pop`
4. Lanjutkan Pekerjaan dengan Semestinya
5. Jika cara pertama masih tidak work, gunakan cara kedua dibawah

## Cara Mengatasi Konflik Versi 2

1. Pindah dulu ke Branch `development`

   > `git checkout development`

2. Kemudian pull perubahan terbaru dari branch `development`

   > `git pull`

3. Kemudian Pindah lagi ke branch yang sedang kamu kerjakan

   > `git checkout <branch mu>`

4. Selanjutnya kita perlu merge perubahan terbaru dari `development`

   > `git merge origin development`
