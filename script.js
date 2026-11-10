function solve(){
  let height = document.getElementById('triangle height').value
  let base = document.getElementById('triangle base').value
  let areaOfTriangle = 0.5*height*base
  document.getElementById('display').innerHTML = `<p>Area of triangle = ${areaOfTriangle}cm²</p>`
  document.getElementById('triangle height').value = ''
  document.getElementById('triangle base').value = ''
}

function show(){
  let length = document.getElementById('side').value
  let areaOfSquare = length**2
  document.getElementById('display square').innerHTML = `<p>Area of square = ${areaOfSquare}cm²</p>`
  document.getElementById('side') = ''
  
}

function circle(){
  let radius = document.getElementById("circle radius").value
  let areaOfCircle = 3.14159*radius**2
  displayCircle = document.getElementById('display circle')
  displayCircle.innerHTML = 'Area of circle = '
}