import { 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Database, 
  FileText, 
  MessageSquare, 
  Settings, 
  Calendar,
  Shield,
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles,
  Rocket,
  Brain,
  Globe
} from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Card } from './components/ui/card';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-white/10 backdrop-blur-xl border-white/20 text-white px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Documento confidencial – Uso interno
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                Transformación Digital Integral
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-slate-300 mb-6 leading-relaxed">
                Implementación de Tecnología, Automatización y Reportería
              </p>
              <p className="text-xl text-slate-400 mb-8">
                Modernización integral de AMP para impulsar eficiencia, adquisición y decisiones basadas en datos
              </p>
            </motion.div>

            {/* Floating elements */}
            <div className="mt-20 relative h-40">
              <motion.div
                className="absolute left-1/4 top-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 opacity-20 blur-sm" />
              </motion.div>
              <motion.div
                className="absolute right-1/4 top-10"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Resumen Ejecutivo
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <Brain className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg text-slate-300 leading-relaxed">
                  Este proyecto busca <span className="text-white font-semibold">modernizar de forma integral</span> las operaciones de AMP, implementando tecnología que permita reducir significativamente las tareas manuales y automatizar procesos críticos.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <Globe className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg text-slate-300 leading-relaxed">
                  Estableceremos un <span className="text-white font-semibold">sistema robusto de tecnologia</span> para la centralizacion de datos facilitando la toma de deciciones, con dashboards en tiempo real del estado del negocio.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent backdrop-blur-xl border-white/20 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <Rocket className="w-16 h-16 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-white">Estructura del Proyecto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-white">Diagnóstico Intensivo</h4>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-white">Implementación Continua</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Situación Actual */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Problemas Actuales
              </span>
            </h2>
            <p className="text-xl text-slate-400">Desafíos que resolveremos juntos</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: AlertCircle, color: "from-red-500 to-orange-500", title: "Tecnología inexistente o rudimentaria", desc: "Ausencia de herramientas digitales que soporten los procesos operativos del negocio." },
              { icon: FileText, color: "from-orange-500 to-yellow-500", title: "Procesos manuales y baja trazabilidad", desc: "Gestión basada en planillas y documentos sin integración ni historial centralizado." },
              { icon: Zap, color: "from-yellow-500 to-green-500", title: "Falta de automatización en atención", desc: "Respuestas y seguimientos realizados de forma manual, limitando capacidad de escala." },
              { icon: Users, color: "from-green-500 to-cyan-500", title: "Captación sin sistema ni métricas", desc: "Ausencia de un proceso estructurado para adquisición y seguimiento de leads." },
              { icon: BarChart3, color: "from-cyan-500 to-blue-500", title: "Ausencia de dashboards y KPIs claros", desc: "Poca visibilidad en tiempo real sobre el estado del negocio ni indicadores de rendimiento." },
              { icon: Database, color: "from-blue-500 to-purple-500", title: "Datos dispersos y sin centralización", desc: "Información almacenada en múltiples fuentes sin integración ni posibilidad de análisis." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-300 h-full relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Objetivos del Proyecto
              </span>
            </h2>
            <p className="text-xl text-slate-400">Transformación que generará impacto real</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, color: "from-blue-500 to-cyan-500", title: "Digitalización de captura de datos", desc: "Implementar formularios digitales y sistemas de registro que eliminen la dependencia de papel y planillas, todo en un solo lugar" },
              { icon: Users, color: "from-green-500 to-emerald-500", title: "Sistema de gestión integral", desc: "Centralizar la gestión de clientes, profesionales y servicios en una plataforma unificada." },
              { icon: Zap, color: "from-purple-500 to-pink-500", title: "Automatización de atención inicial", desc: "Configurar respuestas automáticas y flujos de trabajo para agilizar la atención a consultas." },
              { icon: TrendingUp, color: "from-orange-500 to-red-500", title: "Sistema de adquisición y seguimiento", desc: "Implementar procesos estructurados para captación, seguimiento y conversión de potenciales clientes." },
              { icon: BarChart3, color: "from-cyan-500 to-blue-500", title: "Dashboards y métricas operativas", desc: "Crear visualizaciones en tiempo real de KPIs críticos para facilitar la toma de decisiones." },
              { icon: Target, color: "from-green-500 to-teal-500", title: "Capacitación y adopción del equipo", desc: "Asegurar que el equipo de AMP adopte las nuevas herramientas mediante capacitación continua." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-300 h-full relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-4 group-hover:rotate-6 transition-transform`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alcance - Fase 1 */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-blue-950/20 to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alcance del Proyecto
            </h2>
            <p className="text-2xl text-slate-400">Alternativa 1</p>
          </motion.div>

          {/* Fase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold shadow-2xl shadow-blue-500/50">
                1
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Fase 1 – Diagnóstico y Roadmap</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-xl text-cyan-400">20 días</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Kick-off del proyecto", desc: "Reunión de inicio con stakeholders y definición de alcance detallado" },
                { title: "Relevamiento de procesos", desc: "Mapeo completo de flujos actuales y puntos de dolor" },
                { title: "Mapa de datos", desc: "Identificación de entidades, relaciones y flujos de información" },
                { title: "Identificación de automatizaciones", desc: "Detección de oportunidades de automatización de alto impacto" },
                { title: "Definición de métricas", desc: "Establecimiento de KPIs y métricas clave para el negocio" },
                { title: "Roadmap priorizado", desc: "Quick Wins, iniciativas Core y evolutivas por trimestre" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-xl border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-white text-lg">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-2xl shadow-purple-500/50">
                2
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Fase 2 – Implementación y Acompañamiento</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-5 h-5 text-pink-400" />
                  <span className="text-xl text-pink-400">12 meses</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Settings, title: "Configuración del entorno", desc: "Setup de plataformas, integraciones y configuración inicial del sistema" },
                { icon: FileText, title: "Formularios y captura de datos", desc: "Creación de formularios digitales y flujos de captura de información" },
                { icon: Zap, title: "Automatizaciones", desc: "Implementación de workflows automáticos para procesos recurrentes" },
                { icon: TrendingUp, title: "Adquisición", desc: "Sistema de marketing y seguimiento de leads y oportunidades" },
                { icon: MessageSquare, title: "Atención automatizada", desc: "Configuración de respuestas automáticas y chatbots para atención inicial" },
                { icon: Users, title: "Gestión de clientes y profesionales", desc: "CRM y sistema de gestión de recursos humanos profesionales" },
                { icon: BarChart3, title: "Reportes y dashboards", desc: "Visualizaciones en tiempo real de métricas operativas y de negocio" },
                { icon: Target, title: "Capacitación continua", desc: "Sesiones de formación y soporte al equipo durante todo el proyecto" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 mb-4`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entregables */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Entregables del Proyecto
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border-blue-500/30 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white">Fase 1 - Diagnóstico</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Documento de diagnóstico completo",
                    "Mapa de procesos y flujos actuales",
                    "Requisitos funcionales priorizados",
                    "Modelo de datos de alto nivel",
                    "Roadmap anual de implementación",
                    "Plan de métricas y dashboards"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 bg-gradient-to-br from-purple-500/20 to-pink-500/10 backdrop-blur-xl border-purple-500/30 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white">Fase 2 - Implementación</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sistema configurado y operativo",
                    "Formularios digitales integrados",
                    "Automatizaciones activas y probadas",
                    "Sistema de adquisición funcionando",
                    "Atención automatizada implementada",
                    "Dashboards operativos en producción",
                    "Documentación técnica y de usuario",
                    "Consultoría y soporte continuo"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Metodología y Gobierno
            </h2>
            <p className="text-xl text-slate-400">Trabajo colaborativo y transparente</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, color: "from-blue-500 to-cyan-500", title: "Metodología iterativa", desc: "Trabajo en sprints con entregas incrementales que permiten validar y ajustar continuamente" },
              { icon: Calendar, color: "from-green-500 to-emerald-500", title: "Reuniones semanales", desc: "Sincronización semanal de avances, impedimentos y próximos pasos del proyecto" },
              { icon: BarChart3, color: "from-purple-500 to-pink-500", title: "Revisión mensual de métricas", desc: "Análisis mensual de KPIs e impacto de las implementaciones realizadas" },
              { icon: MessageSquare, color: "from-orange-500 to-red-500", title: "Canales de comunicación", desc: "Slack/Email/Videollamadas para comunicación fluida y documentada" },
              { icon: FileText, color: "from-cyan-500 to-blue-500", title: "Registro de cambios", desc: "Documentación continua de decisiones, cambios y evolución del proyecto" },
              { icon: Shield, color: "from-green-500 to-teal-500", title: "Control de calidad", desc: "Revisiones periódicas y testing continuo de cada implementación" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-300 h-full relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cronograma Visual */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cronograma
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            {/* Fase 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-32"
            >
              <div className="flex items-center justify-end pr-16 relative">
                <Card className="p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border-blue-500/40 max-w-md">
                  <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500">Fase 1</Badge>
                  <h3 className="text-2xl font-bold mb-3 text-white">Diagnóstico y Roadmap</h3>
                  <p className="text-slate-300 mb-4">
                    Relevamiento completo, análisis de procesos y diseño del plan de implementación
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-lg">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">20 días</span>
                  </div>
                </Card>
                <div className="absolute -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold shadow-2xl shadow-blue-500/50 -translate-x-0">
                  1
                </div>
              </div>
            </motion.div>

            {/* Fase 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center justify-start pl-16 relative">
                <Card className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/10 backdrop-blur-xl border-purple-500/40 max-w-md">
                  <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">Fase 2</Badge>
                  <h3 className="text-2xl font-bold mb-3 text-white">Implementación y Acompañamiento</h3>
                  <p className="text-slate-300 mb-4">
                    Desarrollo, configuración, automatizaciones, dashboards y capacitación continua del equipo
                  </p>
                  <div className="flex items-center gap-2 text-pink-400 text-lg">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">12 meses</span>
                  </div>
                </Card>
                <div className="absolute left-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-2xl shadow-purple-500/50 -translate-x-1/2">
                  2
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inversión */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Inversión
              </span>
            </h2>
            <p className="text-xl text-slate-400">Opciones flexibles para tu proyecto</p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pago Mensual */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border-white/20 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 group-hover:from-blue-500/20 group-hover:to-cyan-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Mensual</Badge>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">$1,500</div>
                    <div className="text-slate-400">USD/mes</div>
                    <div className="text-sm text-slate-500 mt-2">Pago por adelantado</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Máxima flexibilidad</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Sin compromiso anual</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Cancelación con 30 días de aviso</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm text-slate-400">Total anual</div>
                    <div className="text-2xl font-bold text-white">$18,000 USD</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Pago Semestral - Destacado */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-500/30 to-pink-500/20 backdrop-blur-xl border-purple-400/50 h-full relative overflow-hidden group shadow-2xl shadow-purple-500/20">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-white text-sm font-semibold rounded-bl-xl">
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500" />
                <div className="relative z-10 mt-4">
                  <Badge className="mb-4 bg-purple-500/30 text-purple-200 border-purple-400/50">Semestral</Badge>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">$8,500</div>
                    <div className="text-slate-300">USD/semestre</div>
                    <div className="text-sm text-slate-400 mt-2">Pago por adelantado</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm font-medium">Ahorro de $500 USD por semestre</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">Mejor relación costo-beneficio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">Prioridad en soporte</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="text-sm text-slate-300">Total anual</div>
                    <div className="text-2xl font-bold text-white">$17,000 USD</div>
                    <div className="text-sm text-green-400 mt-1">Ahorra $1,000 USD al año</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Pago Anual */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-xl border-green-400/30 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 group-hover:from-green-500/20 group-hover:to-emerald-500/10 transition-all duration-500" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Anual</Badge>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">$15,000</div>
                    <div className="text-slate-400">USD/año</div>
                    <div className="text-sm text-slate-500 mt-2">Pago por adelantado</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm font-medium">Máximo ahorro: $3,000 USD</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">16.7% de descuento</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Soporte prioritario 24/7</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Sesiones extra de consultoría</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Mejor valor</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Comparación de planes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white text-center">¿Qué incluye cada plan?</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Todos los planes incluyen:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Implementación completa</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Automatizaciones ilimitadas</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Dashboards personalizados</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Capacitación del equipo</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Planes Semestral y Anual:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Revisión estratégica trimestral</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Acceso a nuevas funcionalidades</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Soporte prioritario</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Exclusivo Plan Anual:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Roadmap tecnológico anual</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Consultoría estratégica mensual</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">Optimizaciones proactivas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Nota adicional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl border-orange-400/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Importante sobre licencias</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Las licencias de software necesarias (CRM, automatización, herramientas de análisis, etc.) corren por cuenta del cliente. Durante la Fase 1 de diagnóstico se proveerá un listado detallado con costos estimados de las plataformas recomendadas según las necesidades específicas de AMP.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Próximos Pasos */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Próximos Pasos
              </span>
            </h2>
            <p className="text-xl text-slate-400">El camino hacia la transformación digital</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: 1, color: "from-blue-500 to-cyan-500", title: "Aprobación de la propuesta", desc: "Revisión y aprobación interna por parte de la dirección de AMP" },
              { num: 2, color: "from-cyan-500 to-teal-500", title: "Designación de responsable", desc: "Asignación del referente interno que liderará el proyecto" },
              { num: 3, color: "from-teal-500 to-green-500", title: "Definición de fecha de inicio", desc: "Coordinación de agendas para el kick-off del proyecto" },
              { num: 4, color: "from-green-500 to-emerald-500", title: "Firma de acuerdo", desc: "Formalización del contrato de servicios y condiciones comerciales" },
              { num: 5, color: "from-emerald-500 to-cyan-500", title: "Kick-off del proyecto", desc: "Reunión inicial de arranque y comienzo de la Fase 1" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="p-8 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border-white/10 hover:border-white/30 transition-all duration-300 h-full relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      {item.num}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-500/30 to-pink-500/20 backdrop-blur-xl border-purple-400/50 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <ArrowRight className="w-16 h-16 text-pink-400 mb-6 group-hover:translate-x-2 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3 text-white">¿Listo para comenzar?</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Estamos disponibles para responder consultas y coordinar el inicio
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Propuesta de Transformación Digital
              </h3>
              <p className="text-slate-400 text-lg mb-2">AMP – Amparar Internaciones Domiciliarias</p>
              <p className="text-slate-500">Propuesta N°1 – Alternativa 1</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-4">2026</p>
              <Badge className="bg-white/10 backdrop-blur-xl border-white/20 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Documento confidencial
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
