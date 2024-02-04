const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://oQriWvlwHZibxGTx:oQriWvlwHZibxGTx@portfoliocluster.emxffhv.mongodb.net/digitalGarden?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('your_database_name');
    const collection = database.collection('projects');

    const sampleData = 
        [
            {
              "title": "Personal Portfolio Website",
              "summary": "A personal website to showcase my development projects and skills.",
              "tech": ["HTML", "CSS", "JavaScript", "React"],
              "github": "https://github.com/yourusername/portfolio-website",
              "demo": "https://yourusername.github.io",
              "images": [
                "https://example.com/image-portfolio1.png",
                "https://example.com/image-portfolio2.png"
              ]
            },
            {
              "title": "Task Management App",
              "summary": "A to-do list app with custom categories, priorities, and due dates.",
              "tech": ["Node.js", "Express", "MongoDB", "Vue.js"],
              "github": "https://github.com/yourusername/task-manager",
              "demo": "https://taskmanager.example.com",
              "images": [
                "https://example.com/image-taskmanager1.png",
                "https://example.com/image-taskmanager2.png"
              ]
            },
            {
              "title": "Weather Forecast App",
              "summary": "An app that fetches and displays weather data from an external API.",
              "tech": ["Python", "Flask", "OpenWeatherMap API"],
              "github": "https://github.com/yourusername/weather-app",
              "demo": null, // null if no demo is available
              "images": [
                "https://example.com/image-weatherapp.png"
              ]
            }
          ]
          
    ;

    const result = await collection.insertMany(sampleData);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    await client.close();
  }
}

main();
