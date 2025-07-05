import './App.css';
import BytesBoard from './components/BytesBoard';

function App() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Flash Bytes</h1>
            <BytesBoard />
        </div>
    );
}

export default App;
