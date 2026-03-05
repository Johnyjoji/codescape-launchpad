import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';

// Unique reviews data
const testimonials = [
    {
        name: 'Ava Green',
        username: '@ava',
        body: 'Codescapes are the best',
        img: 'https://randomuser.me/api/portraits/women/32.jpg',
        country: '�🇺 Australia',
    },
    {
        name: 'Ana Miller',
        username: '@ana',
        body: 'Great WebDesigners',
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        country: '🇩🇪 Germany',
    },
    {
        name: 'Mateo Rossi',
        username: '@mat',
        body: 'Animations are buttery smooth!',
        img: 'https://randomuser.me/api/portraits/men/51.jpg',
        country: '🇮🇹 Italy',
    },
    {
        name: 'Maya Patel',
        username: '@maya',
        body: 'Website Kings',
        img: 'https://randomuser.me/api/portraits/women/53.jpg',
        country: '🇮🇳 India',
    },
    {
        name: 'Noah Smith',
        username: '@noah',
        body: 'Best marquee component!',
        img: 'https://randomuser.me/api/portraits/men/33.jpg',
        country: '🇺🇸 USA',
    },
    {
        name: 'Lucas Stone',
        username: '@luc',
        body: 'Very customizable and smooth.',
        img: 'https://randomuser.me/api/portraits/men/22.jpg',
        country: '🇫🇷 France',
    },
    {
        name: 'Haruto Sato',
        username: '@haru',
        body: 'Impressive performance on mobile!',
        img: 'https://randomuser.me/api/portraits/men/85.jpg',
        country: '🇯🇵 Japan',
    },
    {
        name: 'Emma Lee',
        username: '@emma',
        body: 'Love the pause on hover feature!',
        img: 'https://randomuser.me/api/portraits/women/45.jpg',
        country: '🇨🇦 Canada',
    },
    {
        name: 'Carlos Ray',
        username: '@carl',
        body: 'Great for testimonials and logos.',
        img: 'https://randomuser.me/api/portraits/men/61.jpg',
        country: '🇪🇸 Spain',
    },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
    return (
        <Card className="w-[240px] sm:w-64">
            <CardContent className="p-4">
                <div className="flex items-center gap-2.5">
                    <Avatar className="size-9">
                        <AvatarImage src={img} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                            {name} <span className="text-xs">{country}</span>
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
            </CardContent>
        </Card>
    );
}

export function Testimonials3D() {
    return (
        <div className="relative flex h-[450px] sm:h-[550px] w-full flex-row items-center justify-center overflow-hidden [perspective:1000px]">
            <div
                className="flex flex-row items-center gap-2 sm:gap-4 py-8 sm:py-12 scale-[0.85] sm:scale-100 transition-transform duration-500"
                style={{
                    transform:
                        'rotateX(20deg) rotateY(-10deg) rotateZ(5deg)',
                }}
            >
                {/* Column 1 - Always visible */}
                <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Column 2 - Visible on small screens and up */}
                <Marquee vertical pauseOnHover reverse repeat={3} className="hidden sm:flex [--duration:45s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username + '-1'} {...review} />
                    ))}
                </Marquee>

                {/* Column 3 - Visible on large screens and up */}
                <Marquee vertical pauseOnHover repeat={3} className="hidden lg:flex [--duration:35s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username + '-2'} {...review} />
                    ))}
                </Marquee>

                {/* Column 4 - Visible on extra large screens and up */}
                <Marquee vertical pauseOnHover reverse repeat={3} className="hidden xl:flex [--duration:50s]">
                    {testimonials.map((review) => (
                        <TestimonialCard key={review.username + '-3'} {...review} />
                    ))}
                </Marquee>
            </div>

            {/* Gradient overlays for focus effect */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
