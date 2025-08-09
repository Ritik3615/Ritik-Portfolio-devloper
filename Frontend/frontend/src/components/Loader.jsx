import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 1000); // 5 sec loader
    return () => clearTimeout(timer);
  }, [onFinish]);

  return loading ? (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <h1 className="text-white text-3xl font-bold">Loading...</h1>
    </motion.div>
  ) : null;
}
