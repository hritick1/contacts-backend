const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const routes=require('./routes/routes');
const userRoute=require('./routes/userRoute');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const verifyToken=require('./middleware/verifyToken');
const refresh=require('./routes/refresh');
const logout=require('./routes/logout');
const credentials=require('./middleware/credentials');
const corsOptions=require('./config/corsOptions');

dotenv.config();

mongoose.connect(process.env.DB,{dbName:"ContactVault"});
app.use(credentials);
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use('/',userRoute);
app.use('/refresh',refresh);
app.use('/logout',logout);
app.use(verifyToken);
app.use('/',routes);


app.listen(3001,()=>console.log('Server is Running'));