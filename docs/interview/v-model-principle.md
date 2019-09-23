# v-model 原理

- 是一个语法糖。`Vue`默认使用一个名为`value`的`prop`和一个名为`input`的事件。

- 为了避免不同的`value`具有不同的作用，可以自定义的`v-model`的行为

  ```js
  model: {
    prop: 'checked',
    event: 'change'
  }
  ```
