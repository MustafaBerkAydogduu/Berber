/**
 * Kuaför Nurkan Aydoğdu Çalışma Saatleri Mantığı
 * Pazartesi - Cumartesi: 09:00 - 20:00 (Türkiye Saati UTC+3)
 * Pazar: Kapalı
 */

export function getSalonStatus() {
  const now = new Date();

  // Europe/Istanbul (Türkiye) saat dilimini baz al
  try {
    const trFormat = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Istanbul',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = trFormat.formatToParts(now);
    const day = parts.find((p) => p.type === 'weekday')?.value || 'Mon';
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

    const currentTimeInMinutes = hour * 60 + minute;
    const openTime = 9 * 60; // 09:00 (540 dk)
    const closeTime = 20 * 60; // 20:00 (1200 dk)

    const isSunday = day === 'Sun';
    const isOpen = !isSunday && currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;

    let statusText = 'Açık';
    let detailText = '09:00 – 20:00';
    let isOpeningSoon = false;

    if (isSunday) {
      statusText = 'Kapalı';
      detailText = 'Pazar Günleri Kapalıdır';
    } else if (currentTimeInMinutes < openTime) {
      statusText = 'Şu An Kapalı';
      detailText = `Bugün 09:00'da Açılacak`;
      isOpeningSoon = currentTimeInMinutes >= openTime - 60;
    } else if (currentTimeInMinutes >= closeTime) {
      statusText = 'Şu An Kapalı';
      detailText = day === 'Sat' ? "Pazartesi 09:00'da Açılacak" : "Yarın 09:00'da Açılacak";
    } else {
      statusText = 'Şu An Açık';
      detailText = 'Bugün 20:00’ye Kadar Açık';
    }

    return {
      isOpen,
      statusText,
      detailText,
      isSunday,
      isOpeningSoon,
    };
  } catch {
    // Fallback if Intl is not available
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();
    const isSunday = day === 0;
    const isOpen = !isSunday && hour >= 9 && hour < 20;

    return {
      isOpen,
      statusText: isOpen ? 'Şu An Açık' : 'Şu An Kapalı',
      detailText: isOpen ? 'Bugün 20:00’ye Kadar Açık' : '09:00 – 20:00',
      isSunday,
      isOpeningSoon: false,
    };
  }
}
