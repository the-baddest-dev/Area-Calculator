function solve(){
  let base = document.getElementById('triangle base').value
  let height = document.getElementById('triangle height').value
  let areaOfTriangle = 0.5*base*height
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
  let areaOfQuadilateral = 0.5*d*(Number(h1)+Number(h2))
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
  document.getElementById('rhombusBase').value = ''
  document.getElementById('rhombusHeight').value = ''
}

function trapezium(){
  let a = document.getElementById('firstLength').value
  let b = document.getElementById('secondLength').value
  let h = document.getElementById('perpendicularHeight').value
  let areaOfTrapezium = 0.5*(Number(a) + Number(b))*h
  document.getElementById('displayTrapezium').innerHTML = `<p>Area of trapezium = ${areaOfTrapezium} cm²</p>`
  document.getElementById('firstLength').value = ''
  document.getElementById('secondLength').value = ''
  document.getElementById('perpendicularHeight').value = ''
}

function parallelogram(){
  let b = document.getElementById('pBase').value
  let h = document.getElementById('pHeight').value
  let areaOfParallelogram = b*h
  document.getElementById('displayParallelogram').innerHTML = `<p>Area of parallelogram = ${areaOfParallelogram} cm²</p>`
  document.getElementById(`pBase`).value=''
  document.getElementById('pHeight').value=''
}

function bmi(){
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value
  let BMI = weight/height**2
  document.getElementById('displayBmi').innerHTML = `<p>BMI = ${BMI} kg/m²</p>`
  document.getElementById('weight').value = ''
  document.getElementById('height').value = ''
}