function Student(name,age,cgpa,language){
    this.name=name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    this.display=function(){
       document.write("name is : ",this.name=name,"<br/>");
       document.write("age is : ",this.age=age,"<br/>");
       document.write("CGPA is :",this.cgpa=cgpa,"<br/>");
       document.write("Language : ",this.language=language,"<br/><br/>");    
    }

}

 var student1 = new Student("rony",27,3.92,["java","javascript","C#","C"]);
 var student2 = new Student("hahaahaiihiahaihi",29,3.99,["java","PHP"]);

 student1.display();
 
 student2.display();

