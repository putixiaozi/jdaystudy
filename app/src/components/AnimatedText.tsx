import { CSSProperties, useRef } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const chars = Array.from(text);
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = Math.min(1, start + 3 / chars.length);
        return <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}
