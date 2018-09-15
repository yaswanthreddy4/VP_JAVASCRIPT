//-------------normal explination------------//

// function sampleFun(){
//   console.log(window);
//   console.log(document);
//   console.log(window.alert);
//   console.log(window.prompt);
//   console.log(window.confirm);
// }
// sampleFun();

//-----------to see selected portion as a o/p---------------//

// console.log(document.head);
// console.log(document.body);

//-------- creating & appending element--------------//

// let section = document.createElement('section')
// section.innerHTML = 'This Is A Para1'
// section.innerHTML = '<p>This Is Para2</p>'
// section.innerHTML = '<h1>Heading1 </h1>'
// section.outerHTML = `<h1>Heading1 </h1>
// <p> Para1 </p>`
// document.body.appendChild (section)

//-------- creating & appending nested element--------------//
// let f1 = function(){
// let section1 = document.createElement('section1')
// let h1 = document.createElement('h1')
// let p = document.createElement('p')
// let input = document.createElement('input')
//
// h1.innerHTML = 'Heading1'
// p.innerHTML = 'Para1'
//
// section1.appendChild(h1)
// section1.appendChild(p)
// section1.appendChild(input)
// document.body.appendChild(section1)
// }
// f1();
// let f2 = function(){
// let section2 = document.createElement('section2')
// let h2 = document.createElement('h2')
// let p = document.createElement('p')
// let input = document.createElement('input')
//
// h2.innerHTML = 'Heading2'
// p.innerHTML = 'Para2'
//
// section2.appendChild(h2)
// section2.appendChild(p)
// section2.appendChild(input)
// document.body.appendChild(section2)
// }
// f2();

// let div1 = document.createElement('div1')
// let section1 = document.createElement('section1')
// let h1 = document.createElement('h1')
// let p = document.createElement('p')
// let input = document.createElement('input')
//
// h1.innerHTML = 'Heading1'
// // h1.outerHTML = '<h2>Head2</h2>'
// p.innerHTML = 'Para1'
//
// section1.appendChild(h1)
// section1.appendChild(p)
// section1.appendChild(input)
// div1.appendChild(section1)
// document.body.appendChild(div1)
