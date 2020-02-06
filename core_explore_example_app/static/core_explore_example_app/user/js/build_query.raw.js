var selectElementUrl = "{% url 'core_explore_example_select_element' %}";
var updateUserInputUrl = "{% url 'core_explore_example_update_user_input' %}";
var addCriteriaUrl = "{% url 'core_explore_example_add_criteria' %}";
var saveQueryUrl = "{% url data.save_query_url %}";
var clearCriteriaUrl = "{% url 'core_explore_example_clear_criteria' %}";
var clearQueriesUrl = "{% url 'core_explore_example_clear_queries' %}";
var deleteQueryUrl = "{% url 'core_explore_example_delete_query' %}";
var addQueryCriteriaUrl = "{% url 'core_explore_example_add_query_criteria' %}";
var getQueryUrl = "{% url data.get_query_url %}";
var resultsUrl = "{% url data.results_url data.template_id data.query_id %}";
var getSubElementsQueryBuilderUrl = "{% url 'core_explore_example_get_sub_elements_query_builder' %}";
var insertSubElementsQueryUrl = "{% url 'core_explore_example_insert_sub_elements_query' %}";
var reloadBuildQueryUrl = "{% url data.build_query_url data.template_id data.query_id %}";
var dataSortingFields = "{{ data.data_sorting_fields }}"