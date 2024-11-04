const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb+srv://visheshmamoria04:visheshmamoria@cluster0.4tkmt.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {  })
  .catch(err => console.log('MongoDB connection error:', err));


// Routes
app.use('/api/users', express.Router);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
