library(shiny)

# UI
ui <- shinyUI(
  navbarPage("PASSFIT",
             tabPanel("Home",
                      includeHTML("home.Rhtml")),
             tabPanel("Physical",
                      includeHTML("physical.Rhtml")),
             tabPanel("Cognitive",
                      includeHTML("cognitive.Rhtml")),
             tabPanel("Psychological",
                      includeHTML("psychological.Rhtml")),
             tabPanel("Results",
                      includeHTML("results.Rhtml"))
  )
)

# Server logic
server <- function(input, output) {
  
}

shinyApp(ui, server)