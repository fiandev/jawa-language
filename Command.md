## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

Assign variable
```
ꦄꦠꦸꦫꦺꦤ꧀ foo iku "hello world"
// let foo = "hello world"

ꦥꦚ꧀ꦕꦺꦠ꧀ foo iku 123
// const foo = 123
```

Reassign variable
```
ꦒꦤ꧀ꦠꦶꦪꦺꦤ꧀ foo iku "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
ꦄꦠꦸꦫꦺꦤ꧀ foo iku apik
// let foo = true

ꦄꦠꦸꦫꦺꦤ꧀ foo iku elek
// let foo = true

ꦄꦠꦸꦫꦺꦤ꧀ foo iku elek
// let foo = false
```

### Print / Console.log
```
ꦠꦸꦭꦶꦱꦺꦤ꧀ "Hello world"
// console.log("Hello world")

ꦠꦸꦭꦶꦱꦺꦤ꧀ foo
// console.log(foo)
```


### Condition

```
ꦤꦼꦏ꧀ foo podo karo "Hello world"
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its hello world"
ꦮꦼꦱ꧀

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
ꦤꦼꦏ꧀ foo luweh gede teko 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its bigger than 3"
perhaps foo iku 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "foo is 3"
ꦤꦼꦏ꧀gak
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its smaller than 3"
ꦮꦼꦱ꧀

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `podo`: ' == ',
- `persis mbek`: ' === ',
- `bedo karo`: ' != ',
- `buwedo karo`: ' !== ',
- `luweh gede teko`: ' > ',
- `lebih cilik teko`: ' < ',
- `luweh gede sampe`: ' >= ',
- `luweh cilik sampe`: ' <= '

### Loop

```
ꦒꦌ i ꦥꦼꦁ 10
  ꦤꦼꦏ꧀ i luweh gede teko 3
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "loop ke " + i
  ꦮꦼꦱ꧀
ꦮꦼꦱ꧀

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

### Function
```
ꦔꦮꦺ my_story
    ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur lu " + umur
ꦮꦼꦱ꧀

ꦚꦼꦭꦸꦏ꧀ my_story

ꦔꦮꦺ fungsi_param_banyak a b c
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "a: " + a
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "b: " + b
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "c: " + c
ꦮꦼꦱ꧀

ꦚꦼꦭꦸꦏ꧀ fungsi_param_banyak 3 4 5
```

### Async Function
```
overthinking my_story
    ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur lu " + umur
ꦮꦼꦱ꧀

ꦚꦼꦭꦸꦏ꧀ my_story

ꦔꦮꦺ fungsi_param_banyak a b c
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "a: " + a
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "b: " + b
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "c: " + c
ꦮꦼꦱ꧀

ꦚꦼꦭꦸꦏ꧀ fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
ꦚꦼꦭꦸꦏ꧀
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "Something wrong"
  ꦈꦚ꧀ꦕꦭꦺꦤ꧀ "Error message"
ꦫꦆꦱꦺꦴ
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "Catch error"
U
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "finish finally"
ꦮꦼꦱ꧀


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```
