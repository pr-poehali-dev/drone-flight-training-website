import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Базовый курс',
      description: 'Основы пилотирования БПЛА',
      duration: '2 недели',
      icon: 'Plane',
      features: ['Теория полета', 'Безопасность', 'Первые полеты', 'Сертификат'],
    },
    {
      title: 'Продвинутый курс',
      description: 'Профессиональное управление',
      duration: '1 месяц',
      icon: 'Rocket',
      features: ['Сложные маневры', 'FPV полеты', 'Ночные вылеты', 'Аэросъемка'],
    },
    {
      title: 'Коммерческий курс',
      description: 'Работа с БПЛА на заказ',
      duration: '6 недель',
      icon: 'Trophy',
      features: ['Юридические аспекты', 'Бизнес модели', 'Работа с клиентами', 'Продвинутая съемка'],
    },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/23802ed1-dc53-49c4-a3b9-77294c8c5a09/files/67df20d0-140f-4e54-b205-83e221b9b9b8.jpg',
    'https://cdn.poehali.dev/projects/23802ed1-dc53-49c4-a3b9-77294c8c5a09/files/6588021c-1e80-4f71-b95d-07cb52ae0ff1.jpg',
    'https://cdn.poehali.dev/projects/23802ed1-dc53-49c4-a3b9-77294c8c5a09/files/4ed1400a-63c3-451f-9df0-e23aa61f2075.jpg',
  ];

  const testimonials = [
    { name: 'Алексей Р.', text: 'Отличная школа! За месяц научился летать на профессиональном уровне.', rating: 5 },
    { name: 'Мария К.', text: 'Инструкторы - настоящие профессионалы. Теперь работаю оператором БПЛА.', rating: 5 },
    { name: 'Дмитрий С.', text: 'Современное оборудование и качественное обучение. Рекомендую!', rating: 5 },
  ];

  const faqs = [
    { q: 'Нужна ли предварительная подготовка?', a: 'Нет, мы обучаем с нуля. Все необходимые знания вы получите на курсе.' },
    { q: 'Какое оборудование используется?', a: 'Мы используем современные БПЛА DJI, Autel и FPV дроны ведущих производителей.' },
    { q: 'Выдается ли сертификат?', a: 'Да, по окончании курса вы получаете сертификат установленного образца.' },
    { q: 'Можно ли оплатить обучение в рассрочку?', a: 'Да, мы предлагаем гибкие варианты оплаты, включая рассрочку.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Plane" className="animate-float" />
              SkyPilot Academy
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'courses', 'gallery', 'reviews', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'courses' ? 'Курсы' : 
                   section === 'gallery' ? 'Галерея' : 
                   section === 'reviews' ? 'Отзывы' :
                   section === 'faq' ? 'FAQ' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${gallery[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                ПОЛЕТЫ БУДУЩЕГО
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Профессиональное обучение пилотированию БПЛА с нуля до эксперта
            </p>
            <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="glow-cyan bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('courses')}
              >
                <Icon name="Rocket" className="mr-2" />
                Выбрать курс
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши <span className="text-primary">Программы</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all">
                    <Icon name={course.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    {course.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-secondary">Галерея</span> Полетов
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Отзывы <span className="text-accent">Выпускников</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="bg-card border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{item.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Частые <span className="text-primary">Вопросы</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-secondary">Связаться</span> с Нами
          </h2>
          <Card className="bg-card border-primary/20">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-primary/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-primary/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" className="bg-background border-primary/20" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших целях обучения..." className="bg-background border-primary/20" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 glow-cyan">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Plane" className="text-primary" />
            © 2024 SkyPilot Academy. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
