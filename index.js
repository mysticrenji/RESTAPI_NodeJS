const express= require('express');
const app= express()

app.use(express.json());

const courses =[
    {id:1 , name:'course1'},
    {id:2 , name:'course2'},
    {id:3 , name:'course3'}
];

app.get('/', (req,res)=>    {
    res.send('Hello World')
})

app.post('/api/courses', (req,res)=> {
    const course= {
        id: courses.length+1,
        name: req.body.name}
    

courses.push(course);
res.send(course);
    
});
app.listen(3000,()=> console.log('Listening started on 3000'));
