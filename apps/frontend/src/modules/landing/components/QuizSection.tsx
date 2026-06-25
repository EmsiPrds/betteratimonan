import { Brain, MapPin, Landmark, TreePalm } from 'lucide-react';

export function QuizSection() {
  return (
    <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Atimonan Quiz
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-xl mx-auto">
            How well do you know Atimonan, Quezon? Test your knowledge about our history, culture, places,
            and interesting facts about our municipality.
          </p>

          {/* Quiz Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Landmark className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <span className="text-white text-sm font-medium">History</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <MapPin className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Geography</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <TreePalm className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Tourism</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Brain className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Government</span>
            </div>
          </div>

          <a
            href="/quiz"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white 
                       px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200
                       shadow-lg hover:shadow-xl"
          >
            <Brain className="w-5 h-5" />
            Take the Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
