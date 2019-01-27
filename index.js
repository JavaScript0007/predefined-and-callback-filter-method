const arr = ['JavaScript', 'Python', 'Java', 'C++', 'MongoDB']

const skills = (skill) => skill === 'JavaScript' || skill === 'Python' || skill == 'MongoDB'

const newArr = arr.filter(skills)

console.log(newArr + ' - filter with predefined function')

const awesomeSkills = arr.filter((skill) => skill === 'JavaScript' || skill === 'Python' || skill === 'MongoDB')

console.log(awesomeSkills + ' - filter with callback function')

const mapSkill = arr.map((skill) => skill === 'JavaScript' ? 'JavaScript' :
                                    skill === 'Python' ? 'Python'         :
                                    skill === 'MongoDB' ? 'MongoDB'       :
                                    "I still have to work on " + skill)

console.log(mapSkill)
