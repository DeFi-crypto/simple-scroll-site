import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  date: string;
  images: string[];
}

const getTagClass = (tag: string) => {
  switch (tag) {
    case 'Planned Development':
      return 'bg-yellow-500/90 text-yellow-900';
    case 'Past - Land Development':
      return 'bg-green-500/90 text-white';
    case 'Current Project':
      return 'bg-blue-500/90 text-white';
    case 'House Development':
      return 'bg-violet-500/90 text-white';
    default:
      return 'bg-primary/90 text-white';
  }
};

const ProjectCard = ({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasMultipleImages = project.images.length > 1;

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  return (
    <article
      onClick={onToggle}
      className={`rounded-[20px] overflow-hidden relative bg-foreground text-white cursor-pointer transition-all duration-400 ${
        isExpanded ? 'scale-105 z-10 shadow-xl' : 'hover:scale-[1.02]'
      }`}
    >
      <div className="relative h-[320px] overflow-hidden">
        <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold z-10 ${getTagClass(project.tag)}`}>
          {project.tag}
        </span>

        {hasMultipleImages ? (
          <div className="relative h-full">
            <div
              className="flex h-full transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {project.images.map((img, i) => (
                <div key={i} className="min-w-full h-full">
                  <img src={img} alt={`${project.title} - Image ${i + 1}`} className="w-full h-full object-cover opacity-90" loading="lazy" />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center opacity-0 hover:bg-white/40 transition-all group-hover:opacity-100 hover:!opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center opacity-0 hover:bg-white/40 transition-all group-hover:opacity-100 hover:!opacity-100"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  onClick={(e) => goToSlide(e, i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    i === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover opacity-90" loading="lazy" />
        )}

        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm opacity-70 mt-2">{project.date}</p>
        </div>
      </div>

      <div
        className={`bg-foreground/95 overflow-hidden transition-all duration-400 ${
          isExpanded ? 'max-h-[200px] py-5 px-6' : 'max-h-0 py-0 px-6'
        }`}
      >
        <p className="m-0">{project.description}</p>
      </div>
    </article>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 section-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">
            Explore our developments showcasing quality construction and community-focused design.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => toggleExpand(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
