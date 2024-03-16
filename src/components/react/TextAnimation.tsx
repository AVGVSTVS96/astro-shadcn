import { motion, type Variants } from 'framer-motion';

type TextAnimationProps = {};

const TextAnimation: React.FC<TextAnimationProps> = () => {
  const text: string = 'Bassim Shahidy';
  const letters: string[] = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
      {letters.map((letter: string, index: number) => (
        <motion.span variants={child} key={index} className='inline-block'>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
