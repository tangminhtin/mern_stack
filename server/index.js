
const app = express();

const { default: mongoose } = require("mongoose");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);