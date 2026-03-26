type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  context?: Record<string, unknown>
  stack?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private logs: LogEntry[] = []

  private formatLog(entry: LogEntry): string {
    const { timestamp, level, message, context, stack } = entry
    
    let logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`
    
    if (context) {
      logMessage += ` | Context: ${JSON.stringify(context)}`
    }
    
    if (stack) {
      logMessage += `\nStack: ${stack}`
    }
    
    return logMessage
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>, error?: Error): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      stack: error?.stack,
    }

    // Store logs for development
    if (this.isDevelopment) {
      this.logs.push(entry)
    }

    // Output to console
    const formattedLog = this.formatLog(entry)
    
    switch (level) {
      case 'debug':
        if (this.isDevelopment) console.debug(formattedLog)
        break
      case 'info':
        console.info(formattedLog)
        break
      case 'warn':
        console.warn(formattedLog)
        break
      case 'error':
        console.error(formattedLog)
        break
    }

    // TODO: Send to external logging service in production
    if (!this.isDevelopment && level === 'error') {
      // Send to logging service like Sentry, LogRocket, etc.
      this.sendToExternalService(entry)
    }
  }

  private sendToExternalService(entry: LogEntry): void {
    // Implement external logging service integration
    // Example: Sentry, LogRocket, custom webhook
    console.log('Sending to external service:', entry)
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log('debug', message, context)
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context)
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context)
  }

  error(message: string, context?: Record<string, unknown>, error?: Error): void {
    this.log('error', message, context, error)
  }

  // Get all logs (for development/debugging)
  getLogs(): LogEntry[] {
    return this.logs
  }

  // Clear logs (for development/debugging)
  clearLogs(): void {
    this.logs = []
  }
}

// Export singleton instance
export const logger = new Logger()

// Export types for use in other modules
export type { LogLevel, LogEntry }
