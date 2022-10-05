## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

### Assign variable

default  | latin | hanacaraka
------------- | -------------
let  | aturen | ꦄꦠꦸꦫꦺꦩ꧀
const  | pancet | ꦥꦚ꧀ꦕꦺꦠ꧀

### ReAssign variable

```
// default
let a = "foo"
a = "bar"

// latin
aturen a iku "foo"
gantien a iku "bar"
// hanacaraka
ꦄꦠꦸꦫꦺꦩ꧀ a iku "foo"
ꦒꦤ꧀ꦠꦶꦪꦺꦤ꧀ a iku "bar"
```

### booelan

default  | jawa
------------- | -------------
true  | apik
false  | elek

### print / console.log
```
// latin
tulisen "hello world!"

// hanacaraka
ꦠꦸꦭꦶꦱꦺꦤ꧀ "hello world!"

// default
console.log("hello world!")
```


### Condition

```
// latin
nek foo podo karo "hello world"
  tulisen "its hello world"
wes

// hanacaraka
ꦤꦼꦏ꧀ foo podo karo "Hello world"
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its hello world"
ꦮꦼꦱ꧀

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
// latin
nek foo luweh gede teko 3
  tulisen "its bigger than 3"
teros foo podo karo 3
  tulisen "foo is 3"
gak blas
  tulisen "its smaller than 3"
wes

// hanacaraka
ꦤꦼꦏ꧀ foo luweh gede teko 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "its bigger than 3"
ꦠꦼꦫꦺꦴꦱ꧀ foo podo karo 3
  ꦠꦸꦭꦶꦱꦺꦤ꧀ "foo is 3"
ꦒꦏ꧀ꦧ꧀ꦭꦱ꧀
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
- `luweh cilik teko`: ' < ',
- `luweh gede sampe`: ' >= ',
- `luweh cilik sampe`: ' <= '

### Loop

```
// latin
gae i peng 10
  nek i luweh gede teko 3
    tulisen "loop ke " + i
  wes
wes

// hanacaraka
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
// latin
ngawe my_story
  aturen umur iku 21
  tulisen "Umur lu " + umur
wes

// hanacaraka
ꦔꦮꦺ my_story
    ꦄꦠꦸꦫꦺꦤ꧀ umur iku 21
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "Umur lu " + umur
ꦮꦼꦱ꧀

/* call function */

// latin
nyeluk my_story

// hanacaraka
ꦚꦼꦭꦸꦏ꧀ my_story

/* multiple parameter arguments */

// latin
ngawe fungsi_param_banyak a b c
  tulisen "a : " + a
  tulisen "b : " + b
  tulisen "c : " + c
wes

// hanacaraka
ꦔꦮꦺ fungsi_param_banyak a b c
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "a: " + a
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "b: " + b
    ꦠꦸꦭꦶꦱꦺꦤ꧀ "c: " + c
ꦮꦼꦱ꧀

// latin
nyeluk fungsi_param_banyak 3 4 5

// hanacaraka
ꦚꦼꦭꦸꦏ꧀ fungsi_param_banyak 3 4 5
```

### async / await

default  | latin | hanacaraka
------------- | -------------
async  | sek | ꦱꦺꦏ꧀
await  | enteni | ꦄꦼꦤ꧀ꦠꦺꦤꦶ

### try, catch, and finally Statement

```
// latin
nyobak
  // do try statement
ra iso
  // do catch statement
yowesben
  // do finally statement
wes

// hanacaraka
ꦚꦺꦴꦧꦏ꧀
    // do try statement
ꦫꦆꦱꦺꦴ
    // do catch statement
ꦪꦺꦴꦮꦺꦱ꧀ꦧꦺꦤ꧀
    // do finally statement
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
