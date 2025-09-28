pipeline {
    agent any

    parameters {
        choice(name: 'TEST_SUITE', choices: ['sanity', 'regression'], description: 'Choose which test suite to run')
    }

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def command = (params.TEST_SUITE == 'sanity') ? 'npm run test:sanity' : 'npm run test'
                    sh "docker-compose run --rm playwright ${command}"
                }
            }
        }

        stage('Archive Allure Results') {
            when {
                expression { fileExists('allure-results') }
            }
            steps {
                archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker-compose down --volumes --remove-orphans'
        }
    }
}
