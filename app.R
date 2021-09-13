library(shiny)
library(shinydashboardPlus)
library(ggplot2)

# UI
ui <- dashboardPage(
  dashboardHeader(
    title = "PassFit",
    titleWidth = 250
  ),
  dashboardSidebar(
    width = 250,
    sidebarMenu(id="sidebarmenu",
      menuItem("Home", tabName="home"),
      menuItem("Physical", tabName="physical"),
      menuItem("Cognitive", tabName="cognitive"),
      menuItem("Psychological", tabName="psychological"),
      menuItem("Results", tabName="results")
    )
  ),
  dashboardBody(tabItems(
    tabItem(tabName = "home",
            includeHTML("home.Rhtml")),
    tabItem(tabName = "physical",
            titlePanel("Physical Evaluation"),
            sliderInput(inputId="physicalQ1", label="Question 1:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="physicalQ2", label="Question 2:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="physicalQ3", label="Question 3:",
                        min = 0, max = 100,
                        value = 50),
            actionButton(inputId="physicalButton", "Submit")),
    tabItem(tabName = "cognitive",
            titlePanel("Cognitive Evaluation"),
            sliderInput(inputId="cognitiveQ1", label="Question 1:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="cognitiveQ2", label="Question 2:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="cognitiveQ3", label="Question 3:",
                        min = 0, max = 100,
                        value = 50),
            actionButton(inputId="cognitiveButton", "Submit")),
    tabItem(tabName = "psychological",
            titlePanel("Psychological Evaluation"),
            sliderInput(inputId="psychologicalQ1", label="Question 1:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="psychologicalQ2", label="Question 2:",
                        min = 0, max = 100,
                        value = 50),
            sliderInput(inputId="psychologicalQ3", label="Question 3:",
                        min = 0, max = 100,
                        value = 50),
            actionButton(inputId="psychologicalButton", "Submit")),
    tabItem(tabName = "results",
            titlePanel("Your Results"),
            plotOutput("results"))
  )
  )
)

# UI
# ui <- fluidPage(
#   tabsetPanel(id="tabs",
#               tabPanel("Home",
#                        includeHTML("home.Rhtml")),
#               tabPanel("Physical",
#                        #includeHTML("physical.Rhtml")
#                        titlePanel("Physical Evaluation"),
#                        sliderInput(inputId="physicalQ1", label="Question 1:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="physicalQ2", label="Question 2:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="physicalQ3", label="Question 3:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        actionButton("physicalButton", "Submit")),
#               tabPanel("Cognitive",
#                        #includeHTML("cognitive.Rhtml")
#                        titlePanel("Cognitive Evaluation"),
#                        sliderInput(inputId="cognitiveQ1", label="Question 1:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="cognitiveQ2", label="Question 2:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="cognitiveQ3", label="Question 3:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        actionButton("cognitiveButton", "Submit")),
#               tabPanel("Psychological",
#                        #includeHTML("psychological.Rhtml")
#                        titlePanel("Psychological Evaluation"),
#                        sliderInput(inputId="psychologicalQ1", label="Question 1:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="psychologicalQ2", label="Question 2:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        sliderInput(inputId="psychologicalQ3", label="Question 3:",
#                                    min = 0, max = 100,
#                                    value = 50),
#                        #actionButton("psychologicalButton", "Submit")
#                        ),
#               tabPanel("Results",
#                        #includeHTML("results.Rhtml")
#                        titlePanel("Your Results"),
#                        plotOutput("results")
#               )
#   ),
#   actionButton("psychologicalButton", "Submit")
# )



# Server logic
server <- function(input, output) {
  sliderValues <- reactive({
    
    data.frame(
      Category = c("Physical",
               "Cognitive",
               "Psychological"),
      Score = as.character(c(input$physicalQ1 + input$physicalQ2 + input$physicalQ3,
                             input$cognitiveQ1 + input$cognitiveQ2 + input$cognitiveQ3,
                             input$psychologicalQ1 + input$psychologicalQ2 + input$psychologicalQ3)),
      stringsAsFactors = FALSE)
    
  })
  
  # observeEvent(input$tabs == "results", once=FALSE, {
  #   if (input$tabs == "results") {
  #     req(is.null(sliderValues()))
  #     print("Results Tab run")
  #     ggplot(sliderValues(), aes(y=Score, x=Category)) + geom_bar(stat="identity")
  #   }
  # })
  
  # v <- reactiveValues(doPlot = FALSE)
  # observeEvent(input$psychologicalButton, {
  #   print(input$pyschologicalButton)
  #   v$doPlot <- TRUE
  # })
  
  # observeEvent(input$tabs, {
  #   v$doPlot <- FALSE
  # })
  
  output$results <- renderPlot({
    ggplot(sliderValues(), aes(y=Score, x=Category)) + geom_bar(stat="identity")
  })
}

shinyApp(ui, server)