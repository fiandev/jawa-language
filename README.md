# jawa language

jawa Script is a new programming language, very modern, easy to learn (for javanese), using jawa language on format latin or hanacaraka. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Install from npm
```bash
npm install -g jawa-language
```
Or Clone this repository

```bash
git clone https://github.com/fiandev/jawa-language.git
```

### Run

If you install from npm, run jawa script using `jawa` command

```bash
jawa example/example1.jawa
```

Or run from this repository
```
node jawa-interpreter.js example/example1.jawa
```

## Table Of Content

* [jawa Script](#jawa-script)
   * [Instalation &amp; Run](#instalation--run)
   * [Table Of Content](#table-of-content)
   * [Example](#example)
   * [Command](#command)
   * [Disclaimer](#disclaimer)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Example 

Example : 

```
ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur mu" + umur
ꦤꦼꦏ꧀ umur luweh gede teko 20
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "Elu tuwek"
  ꦄꦠꦸꦫꦺꦤ꧀ umurKu iku umur + 10
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "ꦤꦼꦏ꧀ aku umure " + umurKu
  ꦤꦼꦏ꧀ umurKu luweh gede teko 30
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "aku luweh tuwek"
  ꦮꦼꦱ꧀
ꦤꦼꦏ꧀gak
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "isek bocah"
ꦮꦼꦱ꧀
ꦠꦸꦭꦶꦱꦺꦤ꧀ "Udahan ah"
```

```
ꦄꦠꦸꦫꦺꦤ꧀ jumlah iku 10
ꦠꦸꦭꦶꦱꦺꦤ꧀ "Jumlah: " + jumlah

whichis jumlah iku 11
ꦠꦸꦭꦶꦱꦺꦤ꧀ "Jumlah: " + jumlah

ꦄꦠꦸꦫꦺꦤ꧀ statusUrip iku apik
ꦠꦸꦭꦶꦱꦺꦤ꧀ "status urip :" + statusUrip

ꦒꦌ i ꦥꦼꦁ 10
  ꦤꦼꦏ꧀ i luweh gede teko 3
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "loop ke " + i
  ꦮꦼꦱ꧀
ꦮꦼꦱ꧀
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jawa language is a programming language" and make it true. This project only for education purpose, not for production ready.