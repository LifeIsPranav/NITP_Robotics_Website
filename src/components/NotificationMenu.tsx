import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getNotifications, type Notification } from '@/data';

// Add / edit your notifications in src/data/notifications.json
const initialNotifications: Notification[] = getNotifications();

interface NotificationMenuProps {
  isScrolled: boolean;
}

export function NotificationMenu({ isScrolled }: NotificationMenuProps) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div ref={menuRef} className="relative">
      {/* Bell Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleOpen}
          className={cn(
            'w-10 h-10 rounded-xl transition-all duration-300 relative',
            'hover:bg-accent/80 backdrop-blur-sm',
            isScrolled && 'bg-background/60'
          )}
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          {/* Badge */}
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1 shadow-lg shadow-red-500/30"
              >
                {unreadCount}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed sm:absolute right-4 sm:right-0 left-4 sm:left-auto top-20 sm:top-full mt-0 sm:mt-2 w-auto sm:w-[380px] max-w-[380px] rounded-2xl border border-border/60 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-semibold text-sm">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {unreadCount} new
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-[360px] overflow-y-auto scrollbar-hide">
              {notifications.length === 0 ? (
                <div className="py-12 text-center">
                  <Bell className="w-8 h-8 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">No notifications</p>
                </div>
              ) : (
                notifications.map((notification, index) => {
                  const Wrapper = notification.link ? 'a' : 'div';
                  const wrapperProps = notification.link
                    ? { href: notification.link, onClick: () => markAsRead(notification.id) }
                    : { onClick: () => markAsRead(notification.id) };

                  return (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10, height: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                    >
                      <div
                        className={cn(
                          'relative group border-b border-border/30 last:border-b-0 transition-colors duration-200',
                          !notification.read
                            ? 'bg-primary/[0.04] dark:bg-primary/[0.06]'
                            : 'hover:bg-accent/50'
                        )}
                      >
                        <Wrapper
                          {...wrapperProps}
                          className="flex items-start gap-3 px-5 py-4 cursor-pointer"
                        >
                          {/* Unread dot */}
                          <div className="mt-1.5 flex-shrink-0">
                            <div
                              className={cn(
                                'w-2 h-2 rounded-full transition-all duration-300',
                                !notification.read
                                  ? 'bg-primary shadow-sm shadow-primary/40'
                                  : 'bg-border'
                              )}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className={cn(
                                'text-sm font-medium truncate',
                                !notification.read ? 'text-foreground' : 'text-muted-foreground'
                              )}>
                                {notification.title}
                              </p>
                              {notification.link && (
                                <ExternalLink className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                              {notification.description}
                            </p>
                            <p className="text-[10px] text-muted-foreground/60 mt-1.5 uppercase tracking-wide font-medium">
                              {notification.time}
                            </p>
                          </div>
                        </Wrapper>

                        {/* Dismiss button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            dismissNotification(notification.id);
                          }}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-accent transition-all duration-200"
                        >
                          <X className="w-3.5 h-3.5 text-muted-foreground" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
