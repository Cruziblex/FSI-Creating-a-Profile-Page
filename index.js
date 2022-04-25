let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.textContent = "Rizzo"
header.setAttribute('class','dog-name')
content.append(header)

let body = document.createElement('div')
body.setAttribute('class', 'dog-content')
content.append(body)

let image = document.createElement('img')
image.setAttribute('class','dog-image')
image.setAttribute('src', './assets/rizzo.jpg')
body.append(image)

let details = document.createElement('div')
details.setAttribute('class', 'dog-details')
body.append(details)

let title = document.createElement('h3')
title.textContent = "Description:"
details.append(title)

let para = document.createElement('p')
para.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
details.append(para)

let title2 = document.createElement('h3')
title2.textContent = "Feeding Times:"
details.append(title2)

let list = document.createElement('ul')
details.append(list)

let list1 = document.createElement('li')
list1.textContent = "9:00 am"
list.append(list1)

let list2 = document.createElement('li')
list2.textContent = "12:00 pm"
list.append(list2)

let list3 = document.createElement('li')
list3.textContent = "5:00 pm"
list.append(list3)