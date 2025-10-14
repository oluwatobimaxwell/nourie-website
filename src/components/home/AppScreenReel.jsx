
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, Signal, Battery, ChevronLeft, MoreHorizontal, ShoppingCart, 
  PackagePlus, Calendar, Clock, User, Loader2, AlertTriangle
} from 'lucide-react';

// Fallback mock data that matches the real API structure
const fallbackMeals = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Indomie & Egg (Fried)",
    time: "08:00 - 10:00",
    portionsLeft: 150,
    description: "When Indomie gets an upgrade — stir-fried with eggs and that Naija pepper kick.",
    price: "3000.00",
    countdown: "17 hrs 17 min"
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Smoky Party Jollof",
    time: "12:00 - 15:00",
    portionsLeft: 85,
    description: "The legendary party Jollof, slow-cooked to smoky perfection with chicken.",
    price: "4500.00",
    countdown: "21 hrs 45 min"
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Fluffy Buttermilk Pancakes",
    time: "07:00 - 11:00",
    portionsLeft: 120,
    description: "A stack of three fluffy pancakes served with syrup and fresh berries.",
    price: "3500.00",
    countdown: "15 hrs 30 min"
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Chicken Shawarma",
    time: "12:00 - 15:00",
    portionsLeft: 95,
    description: "Juicy, saucy, and loaded with meat — the king of all street wraps.",
    price: "4500.00",
    countdown: "19 hrs 22 min"
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Puff Puff (6 pieces)",
    time: "12:00 - 15:00",
    portionsLeft: 200,
    description: "Golden, fluffy, sweet balls of joy — the life of every small chops pack.",
    price: "2000.00",
    countdown: "18 hrs 5 min"
  }
];

const fetchMeals = async () => {
  try {
    const response = await fetch('https://api-dev-server.eatnourie.com/api/meals/meals/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API data to our component format
    return data.results.slice(0, 5).map(meal => ({
      id: meal.id,
      image: meal.image,
      title: meal.name,
      time: `${meal.config.delivery_window_start.substring(0, 5)} - ${meal.config.delivery_window_end.substring(0, 5)}`,
      portionsLeft: Math.floor(Math.random() * 50) + 100,
      description: meal.description,
      price: meal.price.toFixed(2),
      countdown: `${Math.floor(Math.random() * 10) + 12} hrs ${Math.floor(Math.random() * 60)} min`
    }));
  } catch (error) {
    console.warn('Failed to fetch from API, using fallback data:', error);
    // Return fallback data when API fails (CORS or network issues)
    return fallbackMeals;
  }
};

const StatusBar = () => (
  <div className="absolute top-0 left-0 right-0 px-3 pt-1.5 flex justify-between items-center text-white z-20 h-8">
    <div className="flex items-center space-x-1">
      <span className="text-xs font-medium">8:43</span>
      <User className="w-2.5 h-2.5" />
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-medium">
      Abuja, Nigeria
    </div>
    <div className="flex items-center space-x-1">
      <Signal className="w-3 h-3" />
      <Wifi className="w-3 h-3" />
      <div className="relative">
        <Battery className="w-4 h-4 transform -rotate-90" />
        <div className="absolute inset-0.5 flex items-center">
          <div className="w-full h-[50%] bg-white rounded-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

const MealSlide = ({ meal }) => (
  <div className="w-full h-full absolute inset-0 text-white">
    <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    {/* Top UI */}
    <div className="absolute top-8 left-0 right-0 px-3 z-10">
      <div className="flex justify-between items-center mb-1.5">
        <ChevronLeft className="w-5 h-5" /> {/* Increased size */}
        <div className="flex items-center space-x-0.5 bg-black/20 backdrop-blur-sm p-0.5 rounded-full">
          <button className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">Pre-Order</button>
          <button className="px-3 py-1 text-white/80 text-xs font-medium rounded-full">Instant</button>
        </div>
        <div className="w-5" /> {/* Adjusted width to match ChevronLeft size */}
      </div>
      <p className="text-center text-green-300 text-sm font-medium">Accepting Orders For Tomorrow's Breakfast</p> {/* Increased font size */}
    </div>

    {/* Right Side Icons */}
    <div className="absolute top-1/2 -translate-y-1/2 right-1.5 flex flex-col items-center space-y-4 text-xs"> {/* Increased font size for labels */}
      <div className="flex flex-col items-center relative">
        <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center"> {/* Increased size */}
          <ShoppingCart className="w-4 h-4" /> {/* Increased size */}
        </div>
        <span className="mt-0.5">Cart</span>
        <div className="absolute -top-0.5 -right-0.5 bg-red-500 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full">1</div> {/* Increased size and font size */}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center"><PackagePlus className="w-4 h-4" /></div> {/* Increased size */}
        <span className="mt-0.5">Extras</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center"><Calendar className="w-4 h-4" /></div> {/* Increased size */}
        <span className="mt-0.5">Date</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center"><MoreHorizontal className="w-4 h-4" /></div> {/* Increased size */}
        <span className="mt-0.5">More</span>
      </div>
    </div>

    {/* Bottom UI */}
    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 space-y-2">
      <div>
        <h2 className="text-lg font-semibold">{meal.title}</h2>
        <p className="text-xs text-white/90 font-normal">{meal.time} • {meal.portionsLeft} portions left</p> {/* Increased font size and opacity */}
        <p className="text-xs font-normal mt-1.5 leading-tight text-white/80">{meal.description}</p> {/* Changed font weight and added opacity for consistency */}
      </div>
      <div className="space-y-1.5">
        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-green-400/90 text-black py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2"> {/* Increased font size */}
          <ShoppingCart className="w-4 h-4" /> {/* Increased size */}
          <span>Add to cart (₦ {meal.price})</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-yellow-400 text-black py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2"> {/* Increased font size */}
          <Calendar className="w-4 h-4" /> {/* Increased size */}
          <span>Subscribe & Save Cost</span>
        </motion.button>
      </div>
      <p className="text-center text-xs text-white/80 flex items-center justify-center space-x-1 font-normal pt-1"> {/* Increased font size, opacity, and changed font weight */}
        <Clock className="w-3 h-3" /> {/* Increased size */}
        <span>Pre-order closes in {meal.countdown} for this meal</span>
      </p>
    </div>
  </div>
);

const slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0.8,
    scale: 0.95
  }),
  center: {
    y: "0%",
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0.8,
    scale: 0.95
  }),
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function AppScreenReel({ isMobile }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        setIsLoading(true);
        const fetchedMeals = await fetchMeals();
        setMeals(fetchedMeals);
        setError(null);
      } catch (err) {
        setError("Couldn't load meals. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadMeals();
  }, []);

  const imageIndex = meals.length > 0
    ? (page % meals.length + meals.length) % meals.length
    : 0;

  const paginate = useCallback((newDirection) => {
    setPage(p => [p[0] + newDirection, newDirection]);
  }, []);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const startInterval = useCallback(() => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 4000);
  }, [paginate, stopInterval]);

  useEffect(() => {
    if (meals.length > 0) {
      startInterval();
    }
    return stopInterval;
  }, [meals, startInterval, stopInterval]);

  return (
    <div
      className={`w-full h-full bg-black overflow-hidden relative cursor-grab active:cursor-grabbing ${!isMobile ? 'rounded-[42px]' : ''}`}
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <StatusBar />

      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
      )}

      {error && !isLoading && (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
          <AlertTriangle className="w-8 h-8 text-red-400 mb-2" />
          <p className="text-sm text-red-300">{error}</p>
        </div>
      )}

      {!isLoading && !error && meals.length > 0 && (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);

              if (swipe < -swipeConfidenceThreshold) { // Swiped up
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) { // Swiped down
                paginate(-1);
              }
            }}
            className="w-full h-full absolute"
          >
            <MealSlide meal={meals[imageIndex]} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
