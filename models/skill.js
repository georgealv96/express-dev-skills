const skills = [
  {
    number: 100,
    name: 'Cloud Computing Skills',
    picture:
      'https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/07/1_ngkHgQq7ij1NBNr62er3zA.png?w=640&ssl=1'
  },
  {
    number: 101,
    name: 'Data Structures and Algorithms',
    picture:
      'https://images.idgesg.net/images/article/2020/03/jw_series_data_structure_algorithms_java_coding_programmer_2400x1600_davidgoh_akindo_gettyimages_531237630_473456596-100834690-large.jpg?auto=webp&quality=85,70'
  },
  {
    number: 102,
    name: 'Git and Github',
    picture:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--oVyFGbtN--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ce4oq75sia6ni6q46s3.png'
  },
  {
    number: 103,
    name: 'Database and SQL',
    picture:
      'https://miro.medium.com/v2/resize:fit:580/1*5AKv5i_omy24uvWcz64NpA.png'
  },
  {
    number: 104,
    name: 'Object-Oriented Programming',
    picture:
      'https://miro.medium.com/v2/resize:fit:1200/0*5Ype7VzS9KoT5gi8.jpeg'
  },
  {
    number: 105,
    name: 'Computer Networks',
    picture:
      'https://www.lenitytech.com/wp-content/uploads/2015/05/computer_networking.png'
  },
  {
    number: 106,
    name: 'Scripting',
    picture:
      'https://geekflare.com/wp-content/uploads/2023/02/Scripting-Use-Cases.png'
  }
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
}

function deleteOne(number) {
  number = parseInt(number)

  // Delete the object from the array
  skills.splice(
    skills.findIndex((skill) => skill.number === number),
    1
  )
}

function create(skill) {
  // Add the number for the skill
  skill.number = skills[skills.length - 1].number + 1
  skill.picture =
    'https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions.jpg'
  skills.push(skill)
}

function getOne(number) {
  number = parseInt(number)
  return skills.find((skill) => skill.number === number)
}

function getAll() {
  return skills
}
