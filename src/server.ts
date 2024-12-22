import mongoose from 'mongoose';
import app from './app';
const port = 5000;


async function main() {
  try {
    await mongoose.connect(
    'mongodb+srv://blogging_site:OeMYckc9zrunm8vP@cluster0.l4anbhy.mongodb.net/Blogging_site?retryWrites=true&w=majority&appName=Cluster0'
    );
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
