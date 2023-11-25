function calculateTriangleArea()
{
    // get the base input
    const tribase=inputTexttoValue('triangle-base');
    

    // get the height input
    const triheight=inputTexttoValue("triangle-height");
  

    // check the values are number
    if(isNaN(tribase)||isNaN(triheight))
    {
      alert("please enter a nummber");
      return;
    }

    // calcucalte triangle area
    const triangleArea=0.5*tribase*triheight;
    //  set the value to area section
    setValueToArea('triangle-area', triangleArea);

    calculateArea('Triangle',triangleArea);


 
}


// ractangle calculate
function RectangleAreacalculate()
{
    const recweight=inputTexttoValue('rectangle-weight');
    const reclength=inputTexttoValue('rectangle-length');
  

    if(isNaN(recweight)||isNaN(reclength))
    {
      alert("please enter a nummber");
      return;
    }
  
      const recarea=recweight*reclength;
  
    setValueToArea('rectangle-area', recarea);
    calculateArea('Rectangle',recarea);
}

// parallelogram calculate
function calculateParallelogramArea()
{
  const parabase=inputTexttoValue('parallelogram-base');
  const paralenght=inputTexttoValue('parallelogram-length');


  if(isNaN(parabase)||isNaN(paralenght))
  {
    alert("please enter a nummber");
    return;
  }

    const paraarea=parabase*paralenght;

  setValueToArea('parallelogram-area', paraarea);

  calculateArea('Parallelogram',paraarea);
}


// rhombus 

function calculaterhombusArea()
{
    // get the base input
    const rhombusbase=inputTexttoValue('rhombus-base');
    

    // get the height input
    const rhombusheight=inputTexttoValue("rhombus-height");
  

    // check the values are number
    if(isNaN(rhombusbase)||isNaN(rhombusheight))
    {
      alert("please enter a nummber");
      return;
    }

    // calcucalte triangle area
    const rhombusArea=0.5*rhombusbase*rhombusheight;
    //  set the value to area section
    setValueToArea('rhombus-area', rhombusArea);

    calculateArea('Rhombus',rhombusArea);


 
}



// pentagon

function calculatepentagonArea()
{
 // get the base input
 const pentagonbase=inputTexttoValue('pentagon-base');
    

 // get the height input
 const pentagonheight=inputTexttoValue("pentagon-height");


 // check the values are number
 if(isNaN(pentagonbase)||isNaN(pentagonheight))
 {
   alert("please enter a nummber");
   return;
 }

 // calcucalte triangle area
 const pentagonArea=0.5*pentagonbase*pentagonheight;
 //  set the value to area section
 setValueToArea('pentagon-area', pentagonArea);

 calculateArea('pentagon',pentagonArea);

}

// ellipse

function calculateellipseArea()
{
 // get the base input
 const ellipsebase=inputTexttoValue('ellipse-base');
    

 // get the height input
 const ellipseheight=inputTexttoValue("ellipse-height");


 // check the values are number
 if(isNaN(ellipsebase)||isNaN(ellipseheight))
 {
   alert("please enter a nummber");
   return;
 }

 // calcucalte triangle area
 const ellipseArea=3.14*ellipsebase*ellipseheight;

 const areadec=ellipseArea.toFixed(4);
 //  set the value to area section
 setValueToArea('ellipse-area', areadec);

 calculateArea('ellipse',areadec);

}

// reusable function to get input 
function inputTexttoValue(inputid)
{
    const inputField=document.getElementById(inputid);
    const inputValuetext=inputField.value;
    const input=parseFloat(inputValuetext); 
    return input;
}


// reusable function to set the value
function setValueToArea(shapeid,shapeSize)
{
  const shape=document.getElementById(shapeid);
  shape.innerText=shapeSize;
  return shape;
} 


/*
*1.get the elementby getelementbyid
2.create  an element you want to add by createElement
3.set inner html it could be dynamic templet string
4.if neended add some class
5.append the create element as the child of the parrent
*/

// reusable calculationEntry
function calculateArea(areaName,area)
{
     const  calculationEntry=document.getElementById('calculationEntry');
      
// "childElementCount" count the number of calculation entry
     const count=calculationEntry.childElementCount;  

     const p=document.createElement('p');
     p.classList.add('my-2');
     p.innerHTML=`${count+1}. ${areaName}  ${area} cm<sup>2</sup> <button class="btn btn-primary">convert to m<sup>2</sup></button>`;

     calculationEntry.appendChild(p);
} 