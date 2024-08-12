let person ={
    name:'Khaled',
    age:23,
    city:'Kuwait',
}
person.email= 'khaled-kk01@hotmail.com'

function hasKey(obj,key){
    if(obj[key]){
        console.log(true);
        
    }else{
        console.log(false)
    }
}
hasKey(person,"name")
const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  let names=''
  const titles = movies.forEach((title)=>{
    names=names+' '+title.title
  })
  console.log(names)
  let total=0
  const year94= movies.filter((year)=>{
    if(year.year==1994){
        return year
    }
  })
  console.log(year94)
movies[3].genre="Action/Drama"
groupMoviesByGenre = movies.foreach((obj,key)=>{
    if(obj.genre[key]){
        return key +' '+obj.title
    }
})
console.log(groupMoviesByGenre(movies,"Drama"));
