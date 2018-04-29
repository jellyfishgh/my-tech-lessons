class Student {
  constructor(name) {
    console.log('constructor', name)
    this.name = name
  }
  getName() {
    return this.name
  }
}

const stu = new Student('xiaoguai')
console.log(stu.getName())

const stu1 = new Student('hemu')
console.log(stu1.getName())