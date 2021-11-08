---
title: Non Null Type Inference After Null Checking in Flutter
slug: non-null-checking-in-flutter
author: Yohanes Bandung Bondowoso
description: It is silly that Flutter cannot dictate from the null check not a moment ago, and infer that a variable is in fact non-nullable. There is only one possible control flow from that point on! Bang operator is risky because there's possibility of neglecting the operator in future refactoring. So I use this approach.
tags:
  - flutter #flutter
  - dart #dart
  - programming #programming
  - tutorial #tutorial
twitter:
  link: https://twitter.com/ybbond/status/1457711316513091590
mastodon:
  link: https://indieweb.social/web/@ybbond/107241833365947452
date: 2021-11-08T20:59:49+0700
ID: 1636380000
---

A shorts.

Suppose I make this cool simple widget with sound null safety:

```dart
import 'package:flutter/material.dart';

void main() {
  return CoolWidget();
}

class CoolWidget extends StatelessWidget {
  const CoolWidget({
    this.text,
  });
  
  final String? text;
  
  @override
  Widget build(BuildContext build) {
    if (text != null) return Text(text);
    
    return Text('Y U NO GIVE TEXT?');
  }
}
```

Flutter will get angry and **summon this error log**:

```sh
Error: The argument type 'String?' can't be assigned to the parameter type 'String' because 'String?' is nullable and 'String' isn't.

if (text != null) return Text(text);
                              ^     
```

It is silly that Flutter cannot dictate from the null check `text != null` not a moment ago, and infer that the `text` is in fact non-nullable. There is only one possible control flow from that point on!

There is ***bang operator*** (`!` operator) to tell Flutter: “Yeah, I know it is typed as nullable, but I am super duper sure it will not be a null!”

Which sounds dangerous, no? Code changes, maintainer changes, the world is changing. There is a great chance that sometime in the future, a refactor done and the maintainer forget to deal with the _bang operator_.

## Solution
After browsing the internet for a bit, I found that there **was** a mention in the Dart docs:

 >The analyzer can’t model the flow of your whole application, so it can’t predict the values of global variables or class fields.

which used to be [in this page of docs](https://dart.dev/null-safety), but currently not exists.

From that documentation text, implied that non-null inference can be done in a local scope.So if we define new local variable and do null check on that var, Flutter will gladly say: “OK homie, peace out ✌️”.

```diff
diff --git a/lib/main.dart b/lib/main.dart
index 96969696..69696969 100644
--- a/lib/main.dart
+++ b/lib/main.dart
@@ -13,7 +13,8 @@ class Cool Widget extends StatelessWidget {
      
  @override 
  Widget build(BuildContext build) {
-   if (text != null) return Text(text);
+   final String? newText = text;
+   if (newText != null) return Text(newText);
    
    return Text('Y U NO GIVE TEXT?');
  }
```

Final code looks like this.

```dart
import 'package:flutter/material.dart';

void main() {
  return CoolWidget();
}

class CoolWidget extends StatelessWidget {
  const CoolWidget({
    this.text,
  });
  
  final String? text;
  
  @override
  Widget build(BuildContext build) {
    final String? newText = text;
    if (newText != null) return Text(newText);
    
    return Text('Y U NO GIVE TEXT?');
  }
}
```

## Other Example

It’s not just variable (re)declaration, but **passing parameter to a method also works**.

For example, this will summon error:

```dart
import 'package:flutter/material.dart';

void main() {
  return CoolWidget();
}

class CoolWidget extends StatelessWidget {
  const CoolWidget({
    this.text,
  });

  final String? text;

  @override
  Widget build(BuildContext build) {
    return _buildBuildBuild();
  }
  
  Widget _buildBuildBuild() {
    if (text != null) return Text(text);

    return Text('Y U NO GIVE TEXT?');    
  }
}
```

You might have guessed that the solution is to pass the parameter to the private method:

```diff
diff --git a/lib/main.dart b/lib/main.dart
index 96969696..69696969 100644
--- a/lib/main.dart
+++ b/lib/main.dart
@@ -19,8 +19,8 @@ Widget build(BuildContext build) {
     return _buildBuildBuild();
   }
  
-   Widget _buildBuildBuild() {
-     if (text != null) return Text(text);
+   Widget _buildBuildBuild({String? newText}) {
+     if (newText != null) return Text(newText);
  
      return Text('Y U NO GIVE TEXT?'); 
```

## Conclusion

I personally like this approach, rather than using the _bang operator_ (`!` operator).

Will there be performance impact because we declare some new variables? There might be.

Is passing method parameter counts as declaring new variable? I honestly don’t know. Do tell me if you have insights about this 😃

## References

- GitHub of [dart-lang issue #1472](https://github.com/dart-lang/language/issues/1472)
- dartlang.org Google Group thread titled "[Non-null inference after null check with class fields](https://groups.google.com/a/dartlang.org/g/misc/c/xYKOXNMiFpI)"
- StackOverflow accepted answer of question "[Dart null safety doesn't work with class fields](https://stackoverflow.com/questions/65456958/dart-null-safety-doesnt-work-with-class-fields/65457221#65457221)"
