var images = 
["https://thumbs.dreamstime.com/z/family-parents-childrens-cartoons-dad-mom-two-little-boys-playing-ball-vector-illustration-graphic-design-153411874.jpg,https://image.shutterstock.com/image-vector/cute-kid-welcomevector-illustration-260nw-514865776.jpg,https://i1.wp.com/i.pinimg.com/originals/54/1c/fe/541cfe078b5babd5d91d5f9bef9ada8b.jpg",
"https://i1.wp.com/i.pinimg.com/originals/54/1c/fe/541cfe078b5babd5d91d5f9bef9ada8b.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxB1U3N9DpCo7NlrlAI09LB84_6XSvRujRw&usqp=CAU","https://www.how-to-draw-funny-cartoons.com/images/cartoon-dad-005.jpg"];

var names = ["family book","Nevaan Pathak","Ahaan Pathak","Nina Pandya","Aditya Pathak"];

var i=0;
function next() {
    i++;
    if(i>5){
        i=0;
    }
    document.getElementById("family_member_image").src=images[i];
    document.getElementById("family_member_name").innerHTML=names[i];
}