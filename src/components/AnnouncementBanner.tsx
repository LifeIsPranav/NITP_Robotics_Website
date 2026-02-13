import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 flex-1">
            <Bell size={20} className="flex-shrink-0 animate-pulse" />
            <p className="text-sm font-medium">
              <span className="font-bold">New Event!</span> Join us for the Annual Robotics Fest 2026 - Register Now!
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/20 flex-shrink-0"
            onClick={() => setIsVisible(false)}
          >
            <X size={18} />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
