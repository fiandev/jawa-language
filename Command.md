## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

Assign variable
```
ꦄꦠꦸꦫꦺꦤ꧀ foo iku "hello world"
// let foo = "hello world"

seriously foo iku 123
// const foo = 123
```

Reassign variable
```
ꦒꦤ꧀ꦠꦶꦪꦺꦤ꧀ foo iku "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
ꦄꦠꦸꦫꦺꦤ꧀ foo iku positive vibes
// let foo = true

ꦄꦠꦸꦫꦺꦤ꧀ foo iku worth it
// let foo = true

ꦄꦠꦸꦫꦺꦤ꧀ foo iku negative vibes
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
kalo foo iku "Hello world"
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its hello world"
udahan

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
kalo foo lebih gede 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its bigger than 3"
perhaps foo iku 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "foo is 3"
kalogak
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its smaller than 3"
udahan

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
- `iku`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

```
fomo i endup 10
  kalo i lebih gede 3
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "loop ke " + i
  udahan
udahan

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

### Function
```
so about my_story
    ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "a: " + a
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "b: " + b
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

### Async Function
```
overthinking my_story
    ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "a: " + a
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "b: " + b
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
trust issue
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "Something wrong"
  toxic "Error message"
backstab
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "Catch error"
yaudahlahya
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "finish finally"
udahan


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
