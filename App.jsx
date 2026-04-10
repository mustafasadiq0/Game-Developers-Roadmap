import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { ChevronDown, ChevronUp, Play, BookOpen, Users, Award, Share2, Download, ExternalLink } from 'lucide-react'
import './App.css'

// Import content
import { homepageContent } from './content/homepage.js'
import { learningPaths, pathCategories } from './content/learningPaths.js'
import { quizQuestions, pathRecommendations } from './content/quiz.js'
import { resources } from './content/resources.js'
import { faqData } from './content/faq.js'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizResult, setQuizResult] = useState(null)
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleQuizAnswer = (questionId, optionId) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }))
  }

  const calculateQuizResult = () => {
    const scores = {}
    
    // Initialize scores for all paths
    Object.keys(pathRecommendations).forEach(path => {
      scores[path] = 0
    })

    // Calculate scores based on answers
    quizQuestions.forEach(question => {
      const answerId = quizAnswers[question.id]
      if (answerId) {
        const selectedOption = question.options.find(opt => opt.id === answerId)
        if (selectedOption && selectedOption.weight) {
          Object.entries(selectedOption.weight).forEach(([path, weight]) => {
            scores[path] = (scores[path] || 0) + weight
          })
        }
      }
    })

    // Find the path with highest score
    const recommendedPath = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    )[0]

    setQuizResult(recommendedPath)
    setCurrentSection('quiz-result')
  }

  const shareWebsite = () => {
    if (navigator.share) {
      navigator.share({
        title: 'دليل برمجة الألعاب - ابدأ من هنا',
        text: 'دليلك الشامل لتعلم برمجة الألعاب من الصفر',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('تم نسخ الرابط!')
    }
  }

  const printPage = () => {
    window.print()
  }

  const renderNavigation = () => (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8 space-x-reverse">
            <h1 className="text-xl font-bold text-primary">دليل برمجة الألعاب</h1>
            <div className="hidden md:flex space-x-6 space-x-reverse">
              <button 
                onClick={() => setCurrentSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'home' ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'}`}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => setCurrentSection('paths')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'paths' ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'}`}
              >
                خريطة المسارات
              </button>
              <button 
                onClick={() => setCurrentSection('quiz')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'quiz' ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'}`}
              >
                اختبار تحديد المسار
              </button>
              <button 
                onClick={() => setCurrentSection('resources')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'resources' ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'}`}
              >
                مكتبة المصادر
              </button>
              <button 
                onClick={() => setCurrentSection('faq')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentSection === 'faq' ? 'text-primary bg-accent' : 'text-gray-700 hover:text-primary'}`}
              >
                أسئلة شائعة
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm" onClick={shareWebsite}>
              <Share2 className="w-4 h-4 ml-2" />
              مشاركة
            </Button>
            <Button variant="outline" size="sm" onClick={printPage}>
              <Download className="w-4 h-4 ml-2" />
              طباعة
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )

  const renderHeroSection = () => (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {homepageContent.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          {homepageContent.hero.description}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
          onClick={() => setCurrentSection('quiz')}
        >
          <Play className="w-5 h-5 ml-2" />
          {homepageContent.hero.button}
        </Button>
      </div>
    </section>
  )

  const renderIntroduction = () => (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {homepageContent.introduction.title}
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          {homepageContent.introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )

  const renderAuthorSection = () => (
    <section className="py-16 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {homepageContent.aboutAuthor.title}
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          {homepageContent.aboutAuthor.description}
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
          <Button variant="outline" asChild>
            <a href={homepageContent.aboutAuthor.blogLink} target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-4 h-4 ml-2" />
              المدونة
              <ExternalLink className="w-4 h-4 mr-2" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={homepageContent.aboutAuthor.youtubeLink} target="_blank" rel="noopener noreferrer">
              <Play className="w-4 h-4 ml-2" />
              القناة التعليمية
              <ExternalLink className="w-4 h-4 mr-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )

  const renderPathsSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">خريطة المسارات التفاعلية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <Card key={path.id} className="path-card card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{path.icon}</div>
                  <Badge variant="secondary">{path.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl">{path.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  المدة المتوقعة: {path.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{path.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">المهارات المطلوبة:</h4>
                    <div className="flex flex-wrap gap-1">
                      {path.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">الأدوات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {path.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const renderQuizSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">اختبار تحديد المسار المناسب</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          أجب على الأسئلة التالية لنساعدك في اختيار المسار الأنسب لك في عالم برمجة الألعاب
        </p>
        
        <div className="space-y-8">
          {quizQuestions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {question.id}. {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <div
                      key={option.id}
                      className={`quiz-option p-4 border rounded-lg ${
                        quizAnswers[question.id] === option.id ? 'selected' : ''
                      }`}
                      onClick={() => handleQuizAnswer(question.id, option.id)}
                    >
                      {option.text}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            onClick={calculateQuizResult}
            disabled={Object.keys(quizAnswers).length < quizQuestions.length}
          >
            <Award className="w-5 h-5 ml-2" />
            احصل على توصيتك
          </Button>
        </div>
      </div>
    </section>
  )

  const renderQuizResult = () => {
    if (!quizResult || !pathRecommendations[quizResult]) return null

    const recommendation = pathRecommendations[quizResult]
    
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">نتيجة الاختبار</h2>
            <Badge variant="default" className="text-lg px-4 py-2">
              المسار المناسب لك: {recommendation.title}
            </Badge>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{recommendation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 text-center">
                {recommendation.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">الخطوات التالية:</h3>
              <ul className="space-y-3">
                {recommendation.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold ml-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-x-4 space-x-reverse">
            <Button onClick={() => setCurrentSection('paths')}>
              <BookOpen className="w-4 h-4 ml-2" />
              استكشف جميع المسارات
            </Button>
            <Button variant="outline" onClick={() => setCurrentSection('resources')}>
              <ExternalLink className="w-4 h-4 ml-2" />
              تصفح المصادر
            </Button>
            <Button variant="outline" onClick={() => {
              setQuizAnswers({})
              setQuizResult(null)
              setCurrentSection('quiz')
            }}>
              إعادة الاختبار
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const renderResourcesSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">مكتبة المصادر</h2>
        
        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="card-hover">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 ml-2" />
                          زيارة الرابط
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const renderFAQSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <Collapsible
              key={faq.id}
              open={openFAQ === faq.id}
              onOpenChange={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
            >
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="mt-2">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            {renderHeroSection()}
            {renderIntroduction()}
            {renderAuthorSection()}
          </>
        )
      case 'paths':
        return renderPathsSection()
      case 'quiz':
        return renderQuizSection()
      case 'quiz-result':
        return renderQuizResult()
      case 'resources':
        return renderResourcesSection()
      case 'faq':
        return renderFAQSection()
      default:
        return renderHeroSection()
    }
  }

  return (
    <div className="min-h-screen bg-background arabic-text">
      {renderNavigation()}
      <main>
        {renderCurrentSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">دليل برمجة الألعاب</h3>
            <p className="text-gray-300 mb-6">
              دليلك الشامل لدخول عالم برمجة الألعاب من الصفر
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a 
                href={homepageContent.aboutAuthor.blogLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                المدونة
              </a>
              <a 
                href={homepageContent.aboutAuthor.youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                القناة التعليمية
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2025 د. مصطفى صادق لطيف. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
