function solve(){
  let height = document.getElementById('triangle height').value
  let base = document.getElementById('triangle base').value
  let areaOfTriangle = 0.5*height*base
  displayTriangle.innerHTML = `<p>Area of triangle = ${areaOfTriangle}cm²</p>`
  document.getElementById('triangle height').value = ''
  document.getElementById('triangle base').value = ''
}

function square(){
  let length = document.getElementById('side').value
  let areaOfSquare = length**2
  displaySquare.innerHTML = `<p>Area of square = ${areaOfSquare}cm²</p>`
  document.getElementById('side').value = ''
  
}

function circle(){
  let radius = document.getElementById("circle radius").value
  let areaOfCircle = 3.14159*radius**2
  displayCircle.innerHTML = `<p>Area of circle = ${areaOfCircle}  cm²</p>`
  document.getElementById('cricle radius').value = ''
}


function quadilateral(){
  let d = document.getElementById('diagonal').value
  let h1 = document.getElementById('h1').value
  let h2 = document.getElementById('h2').value
  let areaOfQuadilateral = 0.5*d*(h1+h2)
  displayQuadilateral.innerHTML = `<p>Area of quadilateral = ${areaOfQuadilateral} m²</p>`
  document.getElementById('diagonal').value = ''
  document.getElementById('h1').value = ''
  document.getElementById('h2').value = ''
}

function rhombus(){
  let rBase = document.getElementById('rhombusBase').value
  let rHeight = document.getElementById('rhombusHeight').value
  let areaOfRhombus = rBase*rHeight
  displayRhombus.innerHTML = `<p>Area of rhombus = ${areaOfRhombus} cm²</p>`
  document.getElementById('rhombusBase').value
  document.getElementById('rhombusHeight').value
}